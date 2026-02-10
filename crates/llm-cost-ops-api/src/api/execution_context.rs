//! Execution context middleware and response types for Agentics FEU integration.
//!
//! This module provides:
//! - Middleware that extracts and validates `ExecutionContext` from request headers
//! - `InstrumentedResponse<T>` wrapper that includes the `ExecutionGraph` in responses

use axum::{
    extract::Request,
    http::StatusCode,
    middleware::Next,
    response::{IntoResponse, Response},
    Json,
};
use llm_cost_ops::agents::execution_span::{extract_execution_context, ExecutionGraph};
use serde::Serialize;

/// Middleware that extracts `ExecutionContext` from request headers and injects
/// it into request extensions.
///
/// Applied only to agent execution routes (not health/info/data routes).
///
/// Rejects with 400 if `x-execution-id` or `x-parent-span-id` headers are
/// missing or contain invalid UUIDs.
pub async fn require_execution_context(
    mut request: Request,
    next: Next,
) -> Result<Response, Response> {
    match extract_execution_context(request.headers()) {
        Ok(ctx) => {
            request.extensions_mut().insert(ctx);
            Ok(next.run(request).await)
        }
        Err(e) => Err((
            StatusCode::BAD_REQUEST,
            Json(serde_json::json!({
                "error": {
                    "code": "MISSING_EXECUTION_CONTEXT",
                    "message": format!("{}", e),
                    "details": "Agent execution endpoints require x-execution-id and x-parent-span-id headers"
                }
            })),
        )
            .into_response()),
    }
}

/// API response wrapper that includes the execution graph alongside the data payload.
///
/// Used as the return type for instrumented agent execution handlers.
#[derive(Debug, Clone, Serialize)]
pub struct InstrumentedResponse<T: Serialize> {
    /// The original response data.
    pub data: T,
    /// The execution graph produced during this invocation.
    pub execution_graph: ExecutionGraph,
}
