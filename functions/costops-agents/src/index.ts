/**
 * CostOps Agents - Cloud Function Entry Point
 *
 * Registers the unified handler with Google Cloud Functions Framework.
 *
 * Cloud Function: costops-agents
 * Entry Point: handler
 * Runtime: nodejs20
 * Region: us-central1
 *
 * Routes:
 *   POST /v1/costops/attribution  → Cost Attribution Agent
 *   POST /v1/costops/forecast     → Cost Forecasting Agent
 *   POST /v1/costops/budget       → Budget Enforcement Agent
 *   POST /v1/costops/roi          → ROI Estimation Agent
 *   POST /v1/costops/tradeoff     → Cost-Performance Tradeoff Agent
 *   GET  /v1/costops/health       → Health check
 */

import { http } from '@google-cloud/functions-framework';
import { handler } from './handler';

// Register the unified handler
http('handler', handler);

// Re-export for direct usage
export { handler } from './handler';

// Re-export contracts
export * from './contracts/index';
