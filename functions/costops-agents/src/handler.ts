/**
 * CostOps Agents - Unified Cloud Function Handler
 *
 * Routes requests to all 5 CostOps agents:
 *   POST /v1/costops/attribution  → Cost Attribution Agent
 *   POST /v1/costops/forecast     → Cost Forecasting Agent
 *   POST /v1/costops/budget       → Budget Enforcement Agent
 *   POST /v1/costops/roi          → ROI Estimation Agent
 *   POST /v1/costops/tradeoff     → Cost-Performance Tradeoff Agent
 *   GET  /v1/costops/health       → Health check
 *
 * Every response includes execution_metadata and layers_executed.
 */

import { randomUUID } from 'crypto';
import type { Request, Response } from '@google-cloud/functions-framework';

// Import existing agent handlers (resolved by esbuild from agent source)
import { costAttributionHandler } from '../../../agents/cost-attribution/src/handler/index';
import { roiEstimationAgent } from '../../../agents/roi-estimation/src/handlers/http-handler';
import { handler as tradeoffHandler } from '../../../agents/cost-performance-tradeoff/src/handler/edge-function';

// Import contract schemas for proxy agents
import { BudgetEnforcementInputSchema } from './contracts/budget';
import { CostForecastInputSchema } from './contracts/forecast';

import type { ExecutionMetadata, LayerExecuted } from './contracts/common';

// ============================================================================
// CONSTANTS
// ============================================================================

const SERVICE_NAME = 'costops-agents';
const VERSION = '1.0.0';

const AGENT_NAMES = ['attribution', 'forecast', 'budget', 'roi', 'tradeoff'] as const;
type AgentName = (typeof AGENT_NAMES)[number];

const ROUTE_MAP: Record<string, AgentName> = {
  '/v1/costops/attribution': 'attribution',
  '/v1/costops/forecast': 'forecast',
  '/v1/costops/budget': 'budget',
  '/v1/costops/roi': 'roi',
  '/v1/costops/tradeoff': 'tradeoff',
};

const CORE_API_URL = process.env.CORE_API_URL || '';

// ============================================================================
// MAIN HANDLER
// ============================================================================

export async function handler(req: Request, res: Response): Promise<void> {
  // CORS headers on every response
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Correlation-ID, X-Trace-ID, X-Execution-ID, X-Parent-Span-ID');
  res.set('Access-Control-Max-Age', '3600');

  // Preflight
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  const metadata = buildExecutionMetadata(req);

  // Health endpoint
  if (req.path === '/v1/costops/health' && req.method === 'GET') {
    handleHealth(res, metadata);
    return;
  }

  // Route to agent
  const agentName = ROUTE_MAP[req.path];
  if (!agentName) {
    res.status(404).json({
      error: { code: 'NOT_FOUND', message: `Unknown route: ${req.method} ${req.path}` },
      execution_metadata: metadata,
      layers_executed: [
        { layer: 'AGENT_ROUTING', status: 'failed' as const },
      ],
    });
    return;
  }

  // Only POST for agent endpoints
  if (req.method !== 'POST') {
    res.status(405).json({
      error: { code: 'METHOD_NOT_ALLOWED', message: 'Only POST method is allowed for agent endpoints' },
      execution_metadata: metadata,
      layers_executed: [
        { layer: 'AGENT_ROUTING', status: 'failed' as const },
      ],
    });
    return;
  }

  await dispatchToAgent(agentName, req, res, metadata);
}

// ============================================================================
// EXECUTION METADATA
// ============================================================================

function buildExecutionMetadata(req: Request): ExecutionMetadata {
  return {
    trace_id: (req.headers['x-correlation-id'] as string) || randomUUID(),
    timestamp: new Date().toISOString(),
    service: SERVICE_NAME,
    execution_id: randomUUID(),
  };
}

function buildLayers(agentName: string, status: 'completed' | 'failed', durationMs: number): LayerExecuted[] {
  return [
    { layer: 'AGENT_ROUTING', status: 'completed' },
    {
      layer: `COSTOPS_${agentName.toUpperCase()}`,
      status,
      duration_ms: durationMs,
    },
  ];
}

// ============================================================================
// HEALTH ENDPOINT
// ============================================================================

function handleHealth(res: Response, metadata: ExecutionMetadata): void {
  const agents = AGENT_NAMES.map((name) => ({
    name,
    status: 'healthy' as const,
  }));

  res.status(200).json({
    status: 'healthy',
    service: SERVICE_NAME,
    version: VERSION,
    agents,
    timestamp: new Date().toISOString(),
    execution_metadata: metadata,
    layers_executed: [
      { layer: 'AGENT_ROUTING', status: 'completed' },
    ],
  });
}

// ============================================================================
// RESPONSE CAPTURE
// ============================================================================

interface CapturedResponse {
  statusCode: number;
  body: unknown;
  sent: boolean;
}

function createResponseCapture(): { proxy: Response; capture: CapturedResponse } {
  const capture: CapturedResponse = {
    statusCode: 200,
    body: null,
    sent: false,
  };

  const proxy = {
    status(code: number) {
      capture.statusCode = code;
      return proxy;
    },
    json(body: unknown) {
      capture.body = body;
      capture.sent = true;
      return proxy;
    },
    send(body: unknown) {
      capture.body = body;
      capture.sent = true;
      return proxy;
    },
    set(_key: string, _value: string) {
      return proxy;
    },
    setHeader(_key: string, _value: string) {
      return proxy;
    },
    header(_key: string, _value: string) {
      return proxy;
    },
    end() {
      capture.sent = true;
      return proxy;
    },
  } as unknown as Response;

  return { proxy, capture };
}

// ============================================================================
// AGENT DISPATCH
// ============================================================================

async function dispatchToAgent(
  agentName: AgentName,
  req: Request,
  res: Response,
  metadata: ExecutionMetadata,
): Promise<void> {
  const startTime = Date.now();

  try {
    const { proxy, capture } = createResponseCapture();

    // Create a modified request with path stripped for sub-handlers
    const modifiedReq = Object.create(req) as Request;
    Object.defineProperty(modifiedReq, 'path', { value: '/', writable: true });

    switch (agentName) {
      case 'attribution':
        await costAttributionHandler(modifiedReq, proxy);
        break;
      case 'roi':
        await roiEstimationAgent(modifiedReq, proxy);
        break;
      case 'tradeoff':
        await tradeoffHandler(modifiedReq as any, proxy as any);
        break;
      case 'budget':
        await handleBudgetProxy(req, proxy);
        break;
      case 'forecast':
        await handleForecastProxy(req, proxy);
        break;
    }

    const durationMs = Date.now() - startTime;

    // Build augmented response
    const responseBody =
      typeof capture.body === 'object' && capture.body !== null
        ? capture.body
        : { data: capture.body };

    res.status(capture.statusCode).json({
      ...(responseBody as Record<string, unknown>),
      execution_metadata: metadata,
      layers_executed: buildLayers(agentName, 'completed', durationMs),
    });
  } catch (error) {
    const durationMs = Date.now() - startTime;
    const message = error instanceof Error ? error.message : 'Internal agent error';

    console.error(`[${SERVICE_NAME}] Agent ${agentName} error:`, error);

    res.status(500).json({
      error: { code: 'AGENT_ERROR', message },
      execution_metadata: metadata,
      layers_executed: buildLayers(agentName, 'failed', durationMs),
    });
  }
}

// ============================================================================
// PROXY HANDLERS (Budget & Forecast → Rust API)
// ============================================================================

async function handleBudgetProxy(req: Request, proxy: Response): Promise<void> {
  // Validate input against contract schema
  const parseResult = BudgetEnforcementInputSchema.safeParse(req.body);
  if (!parseResult.success) {
    proxy.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Input validation failed',
        details: { errors: parseResult.error.errors },
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }

  if (!CORE_API_URL) {
    proxy.status(503).json({
      success: false,
      error: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Budget enforcement backend not configured (set CORE_API_URL)',
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }

  await proxyToBackend(
    '/api/v1/agents/budget-enforcement/analyze',
    req,
    proxy,
  );
}

async function handleForecastProxy(req: Request, proxy: Response): Promise<void> {
  // Validate input against contract schema
  const parseResult = CostForecastInputSchema.safeParse(req.body);
  if (!parseResult.success) {
    proxy.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Input validation failed',
        details: { errors: parseResult.error.errors },
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }

  if (!CORE_API_URL) {
    proxy.status(503).json({
      success: false,
      error: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Cost forecasting backend not configured (set CORE_API_URL)',
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }

  await proxyToBackend(
    '/api/v1/agents/cost-forecasting/forecast',
    req,
    proxy,
  );
}

async function proxyToBackend(
  path: string,
  req: Request,
  proxy: Response,
): Promise<void> {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Forward execution context headers
    const forwardHeaders = [
      'x-execution-id',
      'x-parent-span-id',
      'x-cloud-trace-context',
      'x-correlation-id',
      'authorization',
    ];
    for (const header of forwardHeaders) {
      const value = req.headers[header];
      if (typeof value === 'string') {
        headers[header] = value;
      }
    }

    const response = await fetch(`${CORE_API_URL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(req.body),
      signal: AbortSignal.timeout(30000),
    });

    const body = await response.json();
    proxy.status(response.status).json(body);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Backend request failed';
    proxy.status(502).json({
      success: false,
      error: {
        code: 'BACKEND_ERROR',
        message,
        timestamp: new Date().toISOString(),
      },
    });
  }
}
