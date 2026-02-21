/**
 * Budget Enforcement Agent - Zod Contract Schemas
 *
 * Classification: FINANCIAL GOVERNANCE
 * Decision Type: budget_constraint_evaluation
 *
 * Based on agents/budget-enforcement/docs/CONTRACT.md
 */

import { z } from 'zod';

// ============================================================================
// INPUT SCHEMAS
// ============================================================================

export const BudgetScopeTypeSchema = z.enum([
  'tenant',
  'project',
  'agent',
  'model',
  'custom',
]);

export const BudgetScopeSchema = z.object({
  type: BudgetScopeTypeSchema,
  tenant_id: z.string(),
  project_id: z.string().optional(),
  agent_id: z.string().optional(),
  model: z.string().optional(),
  dimensions: z.record(z.unknown()).optional(),
});

export const BudgetSchema = z.object({
  budget_id: z.string(),
  name: z.string(),
  limit: z.number().positive(),
  currency: z.string().default('USD'),
  period_start: z.string().datetime(),
  period_end: z.string().datetime(),
  warning_threshold: z.number().min(0).max(1).default(0.80),
  critical_threshold: z.number().min(0).max(1).default(0.95),
  gating_threshold: z.number().min(0).max(1).default(1.0),
  enable_forecasting: z.boolean().default(false),
  is_soft_limit: z.boolean().default(true),
  scope: BudgetScopeSchema,
});

export const DailySpendSchema = z.object({
  date: z.string().datetime(),
  spend: z.number().nonnegative(),
});

export const SpendDataSchema = z.object({
  current_spend: z.number().nonnegative(),
  currency: z.string().default('USD'),
  daily_spend_history: z.array(DailySpendSchema).default([]),
  data_completeness: z.number().min(0).max(1),
  data_as_of: z.string().datetime(),
});

export const BudgetEnforcementInputSchema = z.object({
  request_id: z.string().uuid(),
  budget: BudgetSchema,
  spend_data: SpendDataSchema,
  execution_ref: z.string().optional(),
  include_forecast: z.boolean().default(false),
  timestamp: z.string().datetime(),
});

// ============================================================================
// OUTPUT SCHEMAS
// ============================================================================

export const SignalTypeSchema = z.enum(['advisory', 'warning', 'gating']);

export const SeveritySchema = z.enum(['info', 'warning', 'critical', 'gating']);

export const ViolationTypeSchema = z.enum([
  'none',
  'approaching_limit',
  'limit_exceeded',
  'projected_exceedance',
  'unusual_pattern',
]);

export const RecommendedActionSchema = z.enum([
  'none',
  'monitor',
  'review',
  'reduce_spend',
  'consider_gating',
  'gate',
]);

export const BudgetAlertSchema = z.object({
  alert_type: z.string(),
  severity: SeveritySchema,
  message: z.string(),
  timestamp: z.string().datetime(),
});

export const BudgetEnforcementOutputSchema = z.object({
  signal_id: z.string().uuid(),
  budget_id: z.string(),
  signal_type: SignalTypeSchema,
  severity: SeveritySchema,
  violation_type: ViolationTypeSchema,
  message: z.string(),
  current_spend: z.number().nonnegative(),
  budget_limit: z.number().positive(),
  remaining_budget: z.number(),
  utilization_percent: z.number().min(0),
  projected_spend: z.number().nonnegative().optional(),
  projected_utilization: z.number().optional(),
  days_remaining: z.number().int(),
  daily_average: z.number().nonnegative(),
  recommended_action: RecommendedActionSchema,
  alerts: z.array(BudgetAlertSchema).default([]),
  timestamp: z.string().datetime(),
});

// ============================================================================
// DECISION EVENT SCHEMA
// ============================================================================

export const BudgetConstraintSchema = z.object({
  constraint_type: z.string(),
  violated: z.boolean(),
  current_value: z.string(),
  threshold_value: z.string(),
  utilization_percent: z.number(),
});

export const BudgetDecisionEventSchema = z.object({
  id: z.string().uuid(),
  agent_id: z.literal('budget-enforcement-agent'),
  agent_version: z.string(),
  decision_type: z.literal('budget_constraint_evaluation'),
  inputs_hash: z.string(),
  outputs: BudgetEnforcementOutputSchema,
  confidence: z.number().min(0).max(1),
  constraints_applied: z.array(BudgetConstraintSchema),
  execution_ref: z.string(),
  timestamp: z.string().datetime(),
});

// ============================================================================
// ERROR SCHEMA
// ============================================================================

export const BudgetErrorCodeSchema = z.enum([
  'VALIDATION_ERROR',
  'PERSISTENCE_ERROR',
  'FORECASTING_ERROR',
  'INTERNAL_ERROR',
]);

export const BudgetErrorSchema = z.object({
  code: BudgetErrorCodeSchema,
  message: z.string(),
  details: z.record(z.unknown()).optional(),
  timestamp: z.string().datetime(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type BudgetScopeType = z.infer<typeof BudgetScopeTypeSchema>;
export type BudgetScope = z.infer<typeof BudgetScopeSchema>;
export type Budget = z.infer<typeof BudgetSchema>;
export type DailySpend = z.infer<typeof DailySpendSchema>;
export type SpendData = z.infer<typeof SpendDataSchema>;
export type BudgetEnforcementInput = z.infer<typeof BudgetEnforcementInputSchema>;
export type SignalType = z.infer<typeof SignalTypeSchema>;
export type Severity = z.infer<typeof SeveritySchema>;
export type ViolationType = z.infer<typeof ViolationTypeSchema>;
export type RecommendedAction = z.infer<typeof RecommendedActionSchema>;
export type BudgetAlert = z.infer<typeof BudgetAlertSchema>;
export type BudgetEnforcementOutput = z.infer<typeof BudgetEnforcementOutputSchema>;
export type BudgetDecisionEvent = z.infer<typeof BudgetDecisionEventSchema>;
export type BudgetError = z.infer<typeof BudgetErrorSchema>;
