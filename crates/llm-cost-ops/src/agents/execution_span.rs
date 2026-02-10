//! Execution Span types for Agentics ExecutionGraph integration.
//!
//! This module defines the structured execution span system that allows
//! cost-ops to participate as a Foundational Execution Unit (FEU) within
//! the Agentics execution system.
//!
//! # Hierarchy
//!
//! ```text
//! Core (external)
//!   └─ Repo span (this repo: "cost-ops")
//!       └─ Agent span (one or more per invocation)
//! ```
//!
//! # Contract
//!
//! - Every externally-invoked agent operation MUST receive an `ExecutionContext`
//!   with `execution_id` and `parent_span_id` from the Core.
//! - The repo creates a repo-level span on entry.
//! - Each agent that executes creates an agent-level span nested under the repo span.
//! - Artifacts are attached to agent spans, never directly to the Core span.
//! - If no agent spans are emitted, the execution is INVALID.

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use uuid::Uuid;

/// The repo name constant used in all spans from this repository.
pub const REPO_NAME: &str = "cost-ops";

/// Execution context provided by the Core orchestrator.
///
/// This MUST be present on every agent-execution request. The middleware
/// layer rejects requests that lack either field.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExecutionContext {
    /// Unique ID for the entire execution run (from Core).
    pub execution_id: Uuid,
    /// Parent span ID -- the span created by the Core for this repo invocation.
    pub parent_span_id: Uuid,
}

/// The type of an execution span.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum SpanType {
    /// Repo-level span (one per invocation).
    Repo,
    /// Agent-level span (one per agent execution within the repo invocation).
    Agent,
}

/// Status of an execution span.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
pub enum SpanStatus {
    Ok,
    Failed,
}

/// A stable reference to an artifact produced by an agent.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArtifactRef {
    /// Stable artifact identifier (e.g., decision event ID, signal ID).
    pub artifact_id: String,
    /// Artifact kind (e.g., "decision_event", "budget_signal", "forecast_output").
    pub artifact_type: String,
    /// URI, path, or hash where the artifact content can be located.
    pub reference: String,
}

/// A single execution span in the execution graph.
///
/// Append-only and causally ordered via `parent_span_id`.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExecutionSpan {
    /// Unique span ID.
    pub span_id: Uuid,
    /// Parent span ID (repo span points to Core span; agent span points to repo span).
    pub parent_span_id: Uuid,
    /// Span type.
    pub span_type: SpanType,
    /// Span status.
    pub status: SpanStatus,
    /// Repository name (always "cost-ops").
    pub repo_name: String,
    /// Agent name (only for `SpanType::Agent`).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub agent_name: Option<String>,
    /// Start time (recorded immediately on span creation).
    pub start_time: DateTime<Utc>,
    /// End time (set when the span completes).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub end_time: Option<DateTime<Utc>>,
    /// Failure reason (only when `status == Failed`).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub failure_reason: Option<String>,
    /// Artifacts attached to this span.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub artifacts: Vec<ArtifactRef>,
    /// Additional metadata.
    #[serde(default, skip_serializing_if = "HashMap::is_empty")]
    pub metadata: HashMap<String, serde_json::Value>,
}

/// The complete execution graph output from a single repo invocation.
///
/// This is the structured JSON included in all instrumented API responses.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExecutionGraph {
    /// The execution ID from the Core.
    pub execution_id: Uuid,
    /// The repo-level span.
    pub repo_span: ExecutionSpan,
    /// Nested agent-level spans (one or more).
    pub agent_spans: Vec<ExecutionSpan>,
}

/// Errors from execution graph construction or context extraction.
#[derive(Debug, Clone, thiserror::Error)]
pub enum ExecutionGraphError {
    #[error("No agent spans were emitted during repo execution")]
    NoAgentSpans,
    #[error("Missing required header: x-parent-span-id")]
    MissingParentSpanId,
    #[error("Missing required header: x-execution-id")]
    MissingExecutionId,
    #[error("Invalid UUID in header {header}: {value}")]
    InvalidUuid {
        header: &'static str,
        value: String,
    },
}

/// Extract an `ExecutionContext` from HTTP request headers.
///
/// Expects:
/// - `x-execution-id`: valid UUID
/// - `x-parent-span-id`: valid UUID
///
/// Returns `Err` if either header is missing or contains an invalid UUID.
pub fn extract_execution_context(
    headers: &axum::http::HeaderMap,
) -> Result<ExecutionContext, ExecutionGraphError> {
    let execution_id_str = headers
        .get("x-execution-id")
        .and_then(|v| v.to_str().ok())
        .ok_or(ExecutionGraphError::MissingExecutionId)?;

    let execution_id = Uuid::parse_str(execution_id_str).map_err(|_| {
        ExecutionGraphError::InvalidUuid {
            header: "x-execution-id",
            value: execution_id_str.to_string(),
        }
    })?;

    let parent_span_id_str = headers
        .get("x-parent-span-id")
        .and_then(|v| v.to_str().ok())
        .ok_or(ExecutionGraphError::MissingParentSpanId)?;

    let parent_span_id = Uuid::parse_str(parent_span_id_str).map_err(|_| {
        ExecutionGraphError::InvalidUuid {
            header: "x-parent-span-id",
            value: parent_span_id_str.to_string(),
        }
    })?;

    Ok(ExecutionContext {
        execution_id,
        parent_span_id,
    })
}

/// Builder for constructing an `ExecutionGraph` during a repo invocation.
///
/// The builder is append-only: spans can be started, completed, or failed,
/// but never removed or reordered.
pub struct ExecutionGraphBuilder {
    execution_id: Uuid,
    repo_span: ExecutionSpan,
    agent_spans: Vec<ExecutionSpan>,
}

impl ExecutionGraphBuilder {
    /// Create a new builder, immediately opening the repo-level span.
    pub fn new(ctx: &ExecutionContext) -> Self {
        let repo_span = ExecutionSpan {
            span_id: Uuid::new_v4(),
            parent_span_id: ctx.parent_span_id,
            span_type: SpanType::Repo,
            status: SpanStatus::Ok,
            repo_name: REPO_NAME.to_string(),
            agent_name: None,
            start_time: Utc::now(),
            end_time: None,
            failure_reason: None,
            artifacts: Vec::new(),
            metadata: HashMap::new(),
        };
        Self {
            execution_id: ctx.execution_id,
            repo_span,
            agent_spans: Vec::new(),
        }
    }

    /// Get the repo span ID (used as parent for agent spans).
    pub fn repo_span_id(&self) -> Uuid {
        self.repo_span.span_id
    }

    /// Start a new agent-level span. Returns the `span_id` for later completion.
    pub fn start_agent_span(&mut self, agent_name: &str) -> Uuid {
        let span_id = Uuid::new_v4();
        self.agent_spans.push(ExecutionSpan {
            span_id,
            parent_span_id: self.repo_span.span_id,
            span_type: SpanType::Agent,
            status: SpanStatus::Ok,
            repo_name: REPO_NAME.to_string(),
            agent_name: Some(agent_name.to_string()),
            start_time: Utc::now(),
            end_time: None,
            failure_reason: None,
            artifacts: Vec::new(),
            metadata: HashMap::new(),
        });
        span_id
    }

    /// Complete an agent span successfully, attaching any produced artifacts.
    pub fn complete_agent_span(&mut self, span_id: Uuid, artifacts: Vec<ArtifactRef>) {
        if let Some(span) = self.agent_spans.iter_mut().find(|s| s.span_id == span_id) {
            span.end_time = Some(Utc::now());
            span.status = SpanStatus::Ok;
            span.artifacts = artifacts;
        }
    }

    /// Mark an agent span as failed with a reason.
    pub fn fail_agent_span(&mut self, span_id: Uuid, reason: String) {
        if let Some(span) = self.agent_spans.iter_mut().find(|s| s.span_id == span_id) {
            span.end_time = Some(Utc::now());
            span.status = SpanStatus::Failed;
            span.failure_reason = Some(reason);
        }
    }

    /// Finalize the execution graph.
    ///
    /// Enforces invariants:
    /// - At least one agent span must have been emitted.
    /// - If any agent span failed, the repo span is marked `FAILED`.
    pub fn finalize(mut self) -> Result<ExecutionGraph, ExecutionGraphError> {
        if self.agent_spans.is_empty() {
            return Err(ExecutionGraphError::NoAgentSpans);
        }

        let any_failed = self
            .agent_spans
            .iter()
            .any(|s| s.status == SpanStatus::Failed);

        if any_failed {
            self.repo_span.status = SpanStatus::Failed;
            self.repo_span.failure_reason =
                Some("One or more agent spans failed".to_string());
        }

        self.repo_span.end_time = Some(Utc::now());

        Ok(ExecutionGraph {
            execution_id: self.execution_id,
            repo_span: self.repo_span,
            agent_spans: self.agent_spans,
        })
    }

    /// Finalize with a repo-level failure.
    ///
    /// Use this when the repo itself encounters an error (e.g., before any agent
    /// could run). The graph is still returned with all emitted spans.
    pub fn finalize_failed(mut self, reason: String) -> ExecutionGraph {
        self.repo_span.status = SpanStatus::Failed;
        self.repo_span.failure_reason = Some(reason);
        self.repo_span.end_time = Some(Utc::now());

        ExecutionGraph {
            execution_id: self.execution_id,
            repo_span: self.repo_span,
            agent_spans: self.agent_spans,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_context() -> ExecutionContext {
        ExecutionContext {
            execution_id: Uuid::new_v4(),
            parent_span_id: Uuid::new_v4(),
        }
    }

    #[test]
    fn test_builder_creates_repo_span() {
        let ctx = test_context();
        let builder = ExecutionGraphBuilder::new(&ctx);

        assert_eq!(builder.repo_span.span_type, SpanType::Repo);
        assert_eq!(builder.repo_span.repo_name, REPO_NAME);
        assert_eq!(builder.repo_span.parent_span_id, ctx.parent_span_id);
        assert_eq!(builder.repo_span.status, SpanStatus::Ok);
        assert!(builder.repo_span.end_time.is_none());
    }

    #[test]
    fn test_finalize_fails_without_agent_spans() {
        let ctx = test_context();
        let builder = ExecutionGraphBuilder::new(&ctx);

        let result = builder.finalize();
        assert!(result.is_err());
        assert!(matches!(result.unwrap_err(), ExecutionGraphError::NoAgentSpans));
    }

    #[test]
    fn test_successful_agent_span() {
        let ctx = test_context();
        let mut builder = ExecutionGraphBuilder::new(&ctx);

        let span_id = builder.start_agent_span("budget-enforcement");
        builder.complete_agent_span(
            span_id,
            vec![ArtifactRef {
                artifact_id: "sig-001".to_string(),
                artifact_type: "budget_signal".to_string(),
                reference: "signals/sig-001".to_string(),
            }],
        );

        let graph = builder.finalize().unwrap();

        assert_eq!(graph.execution_id, ctx.execution_id);
        assert_eq!(graph.repo_span.status, SpanStatus::Ok);
        assert!(graph.repo_span.end_time.is_some());
        assert_eq!(graph.agent_spans.len(), 1);

        let agent = &graph.agent_spans[0];
        assert_eq!(agent.span_type, SpanType::Agent);
        assert_eq!(agent.agent_name.as_deref(), Some("budget-enforcement"));
        assert_eq!(agent.parent_span_id, graph.repo_span.span_id);
        assert_eq!(agent.status, SpanStatus::Ok);
        assert!(agent.end_time.is_some());
        assert_eq!(agent.artifacts.len(), 1);
        assert_eq!(agent.artifacts[0].artifact_id, "sig-001");
    }

    #[test]
    fn test_failed_agent_marks_repo_failed() {
        let ctx = test_context();
        let mut builder = ExecutionGraphBuilder::new(&ctx);

        let span_id = builder.start_agent_span("cost-forecasting");
        builder.fail_agent_span(span_id, "Model error: insufficient data".to_string());

        let graph = builder.finalize().unwrap();

        assert_eq!(graph.repo_span.status, SpanStatus::Failed);
        assert_eq!(
            graph.repo_span.failure_reason.as_deref(),
            Some("One or more agent spans failed")
        );
        assert_eq!(graph.agent_spans[0].status, SpanStatus::Failed);
        assert_eq!(
            graph.agent_spans[0].failure_reason.as_deref(),
            Some("Model error: insufficient data")
        );
    }

    #[test]
    fn test_mixed_agent_spans() {
        let ctx = test_context();
        let mut builder = ExecutionGraphBuilder::new(&ctx);

        let span1 = builder.start_agent_span("agent-a");
        builder.complete_agent_span(span1, vec![]);

        let span2 = builder.start_agent_span("agent-b");
        builder.fail_agent_span(span2, "failed".to_string());

        let graph = builder.finalize().unwrap();

        // Repo is marked failed because agent-b failed
        assert_eq!(graph.repo_span.status, SpanStatus::Failed);
        assert_eq!(graph.agent_spans.len(), 2);
        assert_eq!(graph.agent_spans[0].status, SpanStatus::Ok);
        assert_eq!(graph.agent_spans[1].status, SpanStatus::Failed);
    }

    #[test]
    fn test_finalize_failed() {
        let ctx = test_context();
        let builder = ExecutionGraphBuilder::new(&ctx);

        let graph = builder.finalize_failed("Internal error before agent execution".to_string());

        assert_eq!(graph.repo_span.status, SpanStatus::Failed);
        assert_eq!(
            graph.repo_span.failure_reason.as_deref(),
            Some("Internal error before agent execution")
        );
        assert!(graph.repo_span.end_time.is_some());
        assert!(graph.agent_spans.is_empty());
    }

    #[test]
    fn test_serialization_round_trip() {
        let ctx = test_context();
        let mut builder = ExecutionGraphBuilder::new(&ctx);

        let span_id = builder.start_agent_span("test-agent");
        builder.complete_agent_span(
            span_id,
            vec![ArtifactRef {
                artifact_id: "art-1".to_string(),
                artifact_type: "test".to_string(),
                reference: "ref/art-1".to_string(),
            }],
        );

        let graph = builder.finalize().unwrap();
        let json = serde_json::to_string(&graph).unwrap();
        let deserialized: ExecutionGraph = serde_json::from_str(&json).unwrap();

        assert_eq!(deserialized.execution_id, graph.execution_id);
        assert_eq!(deserialized.repo_span.span_id, graph.repo_span.span_id);
        assert_eq!(deserialized.agent_spans.len(), 1);
        assert_eq!(
            deserialized.agent_spans[0].agent_name,
            graph.agent_spans[0].agent_name
        );
    }

    #[test]
    fn test_extract_execution_context_success() {
        use axum::http::{HeaderMap, HeaderValue};

        let exec_id = Uuid::new_v4();
        let parent_id = Uuid::new_v4();

        let mut headers = HeaderMap::new();
        headers.insert(
            "x-execution-id",
            HeaderValue::from_str(&exec_id.to_string()).unwrap(),
        );
        headers.insert(
            "x-parent-span-id",
            HeaderValue::from_str(&parent_id.to_string()).unwrap(),
        );

        let ctx = extract_execution_context(&headers).unwrap();
        assert_eq!(ctx.execution_id, exec_id);
        assert_eq!(ctx.parent_span_id, parent_id);
    }

    #[test]
    fn test_extract_execution_context_missing_execution_id() {
        use axum::http::{HeaderMap, HeaderValue};

        let mut headers = HeaderMap::new();
        headers.insert(
            "x-parent-span-id",
            HeaderValue::from_str(&Uuid::new_v4().to_string()).unwrap(),
        );

        let result = extract_execution_context(&headers);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err(),
            ExecutionGraphError::MissingExecutionId
        ));
    }

    #[test]
    fn test_extract_execution_context_missing_parent_span_id() {
        use axum::http::{HeaderMap, HeaderValue};

        let mut headers = HeaderMap::new();
        headers.insert(
            "x-execution-id",
            HeaderValue::from_str(&Uuid::new_v4().to_string()).unwrap(),
        );

        let result = extract_execution_context(&headers);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err(),
            ExecutionGraphError::MissingParentSpanId
        ));
    }

    #[test]
    fn test_extract_execution_context_invalid_uuid() {
        use axum::http::{HeaderMap, HeaderValue};

        let mut headers = HeaderMap::new();
        headers.insert(
            "x-execution-id",
            HeaderValue::from_static("not-a-uuid"),
        );
        headers.insert(
            "x-parent-span-id",
            HeaderValue::from_str(&Uuid::new_v4().to_string()).unwrap(),
        );

        let result = extract_execution_context(&headers);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err(),
            ExecutionGraphError::InvalidUuid { header: "x-execution-id", .. }
        ));
    }

    #[test]
    fn test_causal_ordering() {
        let ctx = test_context();
        let mut builder = ExecutionGraphBuilder::new(&ctx);

        let s1 = builder.start_agent_span("first");
        let s2 = builder.start_agent_span("second");
        builder.complete_agent_span(s1, vec![]);
        builder.complete_agent_span(s2, vec![]);

        let graph = builder.finalize().unwrap();

        // All agent spans point to the repo span
        for agent_span in &graph.agent_spans {
            assert_eq!(agent_span.parent_span_id, graph.repo_span.span_id);
        }

        // Repo span points to the Core span
        assert_eq!(graph.repo_span.parent_span_id, ctx.parent_span_id);
    }
}
