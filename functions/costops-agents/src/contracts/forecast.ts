/**
 * Cost Forecasting Agent - Zod Contract Schemas
 *
 * Classification: FORECASTING
 * Decision Type: cost_forecast
 *
 * Based on agents/cost-forecasting/docs/CONTRACT.md
 * and src/agents/cost_forecasting/types.rs
 */

import { z } from 'zod';

// ============================================================================
// INPUT SCHEMAS
// ============================================================================

export const ForecastGranularitySchema = z.enum([
  'hourly',
  'daily',
  'weekly',
  'monthly',
]);

export const HistoricalDataPointSchema = z.object({
  timestamp: z.string().datetime(),
  total_cost: z.number().nonnegative(),
  by_provider: z.record(z.number().nonnegative()).optional(),
  by_model: z.record(z.number().nonnegative()).optional(),
  total_tokens: z.number().int().nonnegative().optional(),
  request_count: z.number().int().nonnegative().optional(),
});

export const ForecastConstraintsSchema = z.object({
  budget_cap: z.number().positive().optional(),
  roi_threshold: z.number().optional(),
  max_cost_per_period: z.number().positive().optional(),
  max_growth_rate: z.number().min(0).max(100).optional(),
  min_confidence: z.number().min(0).max(1).optional(),
});

export const ForecastMetadataSchema = z.object({
  organization_id: z.string().optional(),
  project_id: z.string().optional(),
  execution_ref: z.string().optional(),
  source: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export const CostForecastInputSchema = z.object({
  historical_data: z.array(HistoricalDataPointSchema).min(7, {
    message: 'At least 7 data points required for forecasting',
  }),
  forecast_horizon_days: z.number().int().min(1).max(365),
  granularity: ForecastGranularitySchema.default('daily'),
  confidence_level: z.number().min(0).max(1).default(0.95),
  constraints: ForecastConstraintsSchema.default({}),
  metadata: ForecastMetadataSchema.default({}),
  preferred_model: z.string().optional(),
});

// ============================================================================
// OUTPUT SCHEMAS
// ============================================================================

export const GrowthPatternSchema = z.enum([
  'linear',
  'exponential',
  'stable',
  'declining',
  'seasonal',
  'volatile',
]);

export const RiskLevelSchema = z.enum([
  'low',
  'medium',
  'high',
  'critical',
]);

export const ForecastProjectionSchema = z.object({
  timestamp: z.string().datetime(),
  projected_cost: z.number().nonnegative(),
  lower_bound: z.number().nonnegative(),
  upper_bound: z.number().nonnegative(),
  cumulative_cost: z.number().nonnegative(),
  growth_rate: z.number().optional(),
});

export const RiskIndicatorSchema = z.object({
  risk_type: z.string(),
  level: RiskLevelSchema,
  description: z.string(),
  probability: z.number().min(0).max(1),
  potential_impact: z.number().nonnegative().optional(),
  recommendation: z.string().optional(),
});

export const ConstraintResultSchema = z.object({
  satisfied: z.boolean(),
  constraint_value: z.string(),
  actual_value: z.string(),
  margin: z.string().optional(),
  breach_date: z.string().datetime().optional(),
});

export const ConstraintsEvaluationSchema = z.object({
  budget_cap: ConstraintResultSchema.optional(),
  roi_threshold: ConstraintResultSchema.optional(),
  max_cost_per_period: ConstraintResultSchema.optional(),
  growth_rate: ConstraintResultSchema.optional(),
});

export const HistoricalSummarySchema = z.object({
  data_points: z.number().int().nonnegative(),
  period_start: z.string().datetime(),
  period_end: z.string().datetime(),
  total_cost: z.number().nonnegative(),
  average_cost: z.number().nonnegative(),
  std_deviation: z.number().optional(),
});

export const CostForecastOutputSchema = z.object({
  projections: z.array(ForecastProjectionSchema).min(1),
  total_forecasted_cost: z.number().nonnegative(),
  average_daily_cost: z.number().nonnegative(),
  peak_daily_cost: z.number().nonnegative(),
  risk_indicators: z.array(RiskIndicatorSchema),
  growth_pattern: GrowthPatternSchema,
  average_growth_rate: z.number(),
  model_used: z.string(),
  confidence: z.number().min(0).max(1),
  confidence_level: z.number().min(0).max(1),
  constraints_evaluation: ConstraintsEvaluationSchema,
  generated_at: z.string().datetime(),
  historical_summary: HistoricalSummarySchema,
});

// ============================================================================
// DECISION EVENT SCHEMA
// ============================================================================

export const ForecastConstraintAppliedSchema = z.object({
  constraint_type: z.string(),
  name: z.string(),
  value: z.unknown(),
  satisfied: z.boolean(),
  impact: z.string().optional(),
});

export const ForecastDecisionEventSchema = z.object({
  id: z.string().uuid(),
  agent_id: z.literal('cost-forecasting-agent'),
  agent_version: z.string(),
  decision_type: z.literal('cost_forecast'),
  inputs_hash: z.string(),
  outputs: CostForecastOutputSchema,
  confidence: z.number().min(0).max(1),
  constraints_applied: z.array(ForecastConstraintAppliedSchema),
  execution_ref: z.string().optional(),
  timestamp: z.string().datetime(),
  organization_id: z.string().optional(),
  project_id: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

// ============================================================================
// ERROR SCHEMA
// ============================================================================

export const ForecastErrorCodeSchema = z.enum([
  'INSUFFICIENT_DATA',
  'VALIDATION_ERROR',
  'MODEL_ERROR',
  'PERSISTENCE_ERROR',
  'INTERNAL_ERROR',
]);

export const ForecastErrorSchema = z.object({
  code: ForecastErrorCodeSchema,
  message: z.string(),
  details: z.record(z.unknown()).optional(),
  timestamp: z.string().datetime(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ForecastGranularity = z.infer<typeof ForecastGranularitySchema>;
export type HistoricalDataPoint = z.infer<typeof HistoricalDataPointSchema>;
export type ForecastConstraints = z.infer<typeof ForecastConstraintsSchema>;
export type ForecastMetadata = z.infer<typeof ForecastMetadataSchema>;
export type CostForecastInput = z.infer<typeof CostForecastInputSchema>;
export type GrowthPattern = z.infer<typeof GrowthPatternSchema>;
export type RiskLevel = z.infer<typeof RiskLevelSchema>;
export type ForecastProjection = z.infer<typeof ForecastProjectionSchema>;
export type RiskIndicator = z.infer<typeof RiskIndicatorSchema>;
export type ConstraintResult = z.infer<typeof ConstraintResultSchema>;
export type ConstraintsEvaluation = z.infer<typeof ConstraintsEvaluationSchema>;
export type HistoricalSummary = z.infer<typeof HistoricalSummarySchema>;
export type CostForecastOutput = z.infer<typeof CostForecastOutputSchema>;
export type ForecastDecisionEvent = z.infer<typeof ForecastDecisionEventSchema>;
export type ForecastError = z.infer<typeof ForecastErrorSchema>;
