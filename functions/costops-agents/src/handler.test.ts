/**
 * CostOps Agents - Handler Tests
 *
 * Verifies all 5 agent routes, health endpoint, CORS, and execution_metadata.
 */

import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';

// Load the built handler
const { handler } = require('../dist/index.js');

// ============================================================================
// TEST HELPERS
// ============================================================================

interface MockResponse {
  statusCode: number;
  body: any;
  headers: Record<string, string>;
}

function createMockReq(overrides: {
  method?: string;
  path?: string;
  body?: unknown;
  headers?: Record<string, string>;
}) {
  return {
    method: overrides.method || 'POST',
    path: overrides.path || '/',
    body: overrides.body || {},
    headers: overrides.headers || {},
    ip: '127.0.0.1',
    query: {},
  };
}

function createMockRes(): { res: any; result: () => MockResponse } {
  const data: MockResponse = { statusCode: 200, body: null, headers: {} };

  const res = {
    status(code: number) {
      data.statusCode = code;
      return res;
    },
    json(body: any) {
      data.body = body;
      return res;
    },
    send(body: any) {
      data.body = body;
      return res;
    },
    set(key: string, value: string) {
      data.headers[key] = value;
      return res;
    },
    setHeader(key: string, value: string) {
      data.headers[key] = value;
      return res;
    },
  };

  return { res, result: () => data };
}

// ============================================================================
// EXECUTION METADATA VALIDATION
// ============================================================================

function assertExecutionMetadata(body: any) {
  assert.ok(body.execution_metadata, 'Response must include execution_metadata');
  assert.ok(body.execution_metadata.trace_id, 'Must have trace_id');
  assert.ok(body.execution_metadata.timestamp, 'Must have timestamp');
  assert.equal(body.execution_metadata.service, 'costops-agents');
  assert.ok(body.execution_metadata.execution_id, 'Must have execution_id');
}

function assertLayersExecuted(body: any) {
  assert.ok(Array.isArray(body.layers_executed), 'Response must include layers_executed array');
  assert.ok(body.layers_executed.length >= 1, 'Must have at least 1 layer');
  assert.equal(body.layers_executed[0].layer, 'AGENT_ROUTING');
}

// ============================================================================
// TESTS
// ============================================================================

describe('CostOps Agents Unified Handler', () => {

  // ---------- CORS ----------

  describe('CORS', () => {
    it('should set CORS headers on all responses', async () => {
      const req = createMockReq({ method: 'GET', path: '/v1/costops/health' });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.headers['Access-Control-Allow-Origin'], '*');
      assert.ok(r.headers['Access-Control-Allow-Methods'].includes('POST'));
      assert.ok(r.headers['Access-Control-Allow-Headers'].includes('Content-Type'));
    });

    it('should handle OPTIONS preflight', async () => {
      const req = createMockReq({ method: 'OPTIONS', path: '/v1/costops/attribution' });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 204);
    });
  });

  // ---------- HEALTH ----------

  describe('GET /v1/costops/health', () => {
    it('should return healthy status with all 5 agents', async () => {
      const req = createMockReq({ method: 'GET', path: '/v1/costops/health' });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 200);
      assert.equal(r.body.status, 'healthy');
      assert.equal(r.body.service, 'costops-agents');

      const agentNames = r.body.agents.map((a: any) => a.name);
      assert.deepEqual(agentNames, ['attribution', 'forecast', 'budget', 'roi', 'tradeoff']);

      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });

  // ---------- ROUTING ----------

  describe('Routing', () => {
    it('should return 404 for unknown routes', async () => {
      const req = createMockReq({ method: 'POST', path: '/v1/costops/unknown' });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 404);
      assert.equal(r.body.error.code, 'NOT_FOUND');
      assertExecutionMetadata(r.body);
    });

    it('should return 405 for non-POST on agent endpoints', async () => {
      const req = createMockReq({ method: 'GET', path: '/v1/costops/attribution' });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 405);
      assert.equal(r.body.error.code, 'METHOD_NOT_ALLOWED');
      assertExecutionMetadata(r.body);
    });

    it('should use x-correlation-id header as trace_id', async () => {
      const traceId = '550e8400-e29b-41d4-a716-446655440000';
      const req = createMockReq({
        method: 'GET',
        path: '/v1/costops/health',
        headers: { 'x-correlation-id': traceId },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.body.execution_metadata.trace_id, traceId);
    });
  });

  // ---------- COST ATTRIBUTION ----------

  describe('POST /v1/costops/attribution', () => {
    it('should dispatch to cost attribution agent and include metadata', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/attribution',
        body: {
          requestId: '550e8400-e29b-41d4-a716-446655440000',
          usage: {
            provider: 'OpenAI',
            model: 'gpt-4',
            inputTokens: 1000,
            outputTokens: 500,
          },
          pricingContext: {
            inputPricePer1k: 0.03,
            outputPricePer1k: 0.06,
          },
          dimensions: {
            tenant: 'test-tenant',
            project: 'test-project',
          },
        },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      // Should have execution_metadata regardless of agent response
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);

      // Check layers include COSTOPS_ATTRIBUTION
      const agentLayer = r.body.layers_executed.find(
        (l: any) => l.layer === 'COSTOPS_ATTRIBUTION'
      );
      assert.ok(agentLayer, 'Must have COSTOPS_ATTRIBUTION layer');
      assert.equal(agentLayer.status, 'completed');
      assert.ok(typeof agentLayer.duration_ms === 'number');
    });
  });

  // ---------- ROI ESTIMATION ----------

  describe('POST /v1/costops/roi', () => {
    it('should dispatch to ROI estimation agent and include metadata', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/roi',
        body: {
          // Minimal valid ROI input
          cost_records: [
            {
              id: '550e8400-e29b-41d4-a716-446655440000',
              timestamp: '2024-01-01T00:00:00Z',
              provider: 'OpenAI',
              model: 'gpt-4',
              prompt_tokens: 1000,
              completion_tokens: 500,
              total_tokens: 1500,
              cost_amount: '0.045',
              currency: 'USD',
            },
          ],
          outcome_metrics: [
            {
              id: '550e8400-e29b-41d4-a716-446655440001',
              timestamp: '2024-01-01T00:00:00Z',
              metric_type: 'throughput',
              metric_name: 'requests_per_hour',
              value: 100,
              unit: 'requests/hour',
            },
          ],
          analysis_scope: 'organization',
          period_start: '2024-01-01T00:00:00Z',
          period_end: '2024-01-31T00:00:00Z',
          request_id: '550e8400-e29b-41d4-a716-446655440002',
        },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);

      const agentLayer = r.body.layers_executed.find(
        (l: any) => l.layer === 'COSTOPS_ROI'
      );
      assert.ok(agentLayer, 'Must have COSTOPS_ROI layer');
      assert.equal(agentLayer.status, 'completed');
    });
  });

  // ---------- COST-PERFORMANCE TRADEOFF ----------

  describe('POST /v1/costops/tradeoff', () => {
    it('should dispatch to tradeoff agent and include metadata', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/tradeoff',
        body: {
          records: [
            {
              id: '550e8400-e29b-41d4-a716-446655440000',
              timestamp: '2024-01-01T00:00:00Z',
              provider: 'OpenAI',
              model: 'gpt-4',
              cost: {
                cost_per_request_usd: 0.03,
                cost_per_1k_tokens_usd: 0.03,
                total_cost_usd: 0.03,
                token_count: 1000,
              },
              latency: {
                p50_ms: 500,
                p95_ms: 800,
                p99_ms: 1200,
                avg_ms: 550,
                min_ms: 200,
                max_ms: 1500,
              },
              quality: {
                composite_score: 0.85,
              },
            },
          ],
        },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);

      const agentLayer = r.body.layers_executed.find(
        (l: any) => l.layer === 'COSTOPS_TRADEOFF'
      );
      assert.ok(agentLayer, 'Must have COSTOPS_TRADEOFF layer');
      assert.equal(agentLayer.status, 'completed');
    });
  });

  // ---------- BUDGET ENFORCEMENT ----------

  describe('POST /v1/costops/budget', () => {
    it('should validate budget input against contract schema', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/budget',
        body: { invalid: true },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 400);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });

    it('should return 503 when CORE_API_URL is not set', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/budget',
        body: {
          request_id: '550e8400-e29b-41d4-a716-446655440000',
          budget: {
            budget_id: 'budget-1',
            name: 'Test Budget',
            limit: 10000,
            currency: 'USD',
            period_start: '2024-01-01T00:00:00Z',
            period_end: '2024-12-31T23:59:59Z',
            scope: { type: 'tenant', tenant_id: 'test-tenant' },
          },
          spend_data: {
            current_spend: 5000,
            currency: 'USD',
            data_completeness: 0.95,
            data_as_of: '2024-06-15T00:00:00Z',
          },
          timestamp: '2024-06-15T00:00:00Z',
        },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      // Without CORE_API_URL, should return 503
      assert.equal(r.statusCode, 503);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });

  // ---------- COST FORECASTING ----------

  describe('POST /v1/costops/forecast', () => {
    it('should validate forecast input against contract schema', async () => {
      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/forecast',
        body: { invalid: true },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 400);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });

    it('should return 503 when CORE_API_URL is not set', async () => {
      // Generate 7 data points (minimum required)
      const historical_data = Array.from({ length: 7 }, (_, i) => ({
        timestamp: new Date(2024, 0, i + 1).toISOString(),
        total_cost: 100 + i * 10,
      }));

      const req = createMockReq({
        method: 'POST',
        path: '/v1/costops/forecast',
        body: {
          historical_data,
          forecast_horizon_days: 30,
        },
      });
      const { res, result } = createMockRes();

      await handler(req, res);
      const r = result();

      assert.equal(r.statusCode, 503);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });
});
