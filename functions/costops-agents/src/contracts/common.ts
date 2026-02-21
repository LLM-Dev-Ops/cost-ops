/**
 * Common Contract Schemas for costops-agents Cloud Function
 *
 * Defines execution_metadata, layers_executed, and health schemas
 * that wrap all agent responses.
 */

import { z } from 'zod';

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const ExecutionMetadataSchema = z.object({
  trace_id: z.string().uuid(),
  timestamp: z.string().datetime(),
  service: z.literal('costops-agents'),
  execution_id: z.string().uuid(),
});

export const LayerStatusSchema = z.enum(['completed', 'failed']);

export const LayerExecutedSchema = z.object({
  layer: z.string(),
  status: LayerStatusSchema,
  duration_ms: z.number().nonnegative().optional(),
});

// ============================================================================
// HEALTH
// ============================================================================

export const AgentHealthSchema = z.object({
  name: z.string(),
  status: z.enum(['healthy', 'degraded', 'unavailable']),
});

export const HealthResponseSchema = z.object({
  status: z.enum(['healthy', 'degraded', 'unhealthy']),
  service: z.literal('costops-agents'),
  version: z.string(),
  agents: z.array(AgentHealthSchema),
  timestamp: z.string().datetime(),
  execution_metadata: ExecutionMetadataSchema,
  layers_executed: z.array(LayerExecutedSchema),
});

// ============================================================================
// WRAPPED RESPONSE (any agent response + metadata)
// ============================================================================

export const WrappedResponseSchema = z.object({
  execution_metadata: ExecutionMetadataSchema,
  layers_executed: z.array(LayerExecutedSchema),
}).passthrough(); // Allow agent-specific fields

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ExecutionMetadata = z.infer<typeof ExecutionMetadataSchema>;
export type LayerStatus = z.infer<typeof LayerStatusSchema>;
export type LayerExecuted = z.infer<typeof LayerExecutedSchema>;
export type AgentHealth = z.infer<typeof AgentHealthSchema>;
export type HealthResponse = z.infer<typeof HealthResponseSchema>;
