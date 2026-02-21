/**
 * CostOps Agents - Contract Exports
 *
 * Unified contract schemas for all 5 agents plus the routing layer.
 *
 * Agent-specific contracts (attribution, ROI, tradeoff) are defined in
 * their respective agent packages under agents/. This file exports
 * contracts for the unified function wrapper and the two agents
 * (budget, forecast) whose TS contracts are defined here.
 */

// Common schemas (execution_metadata, health, layers)
export {
  ExecutionMetadataSchema,
  LayerStatusSchema,
  LayerExecutedSchema,
  AgentHealthSchema,
  HealthResponseSchema,
  WrappedResponseSchema,
} from './common';
export type {
  ExecutionMetadata,
  LayerStatus,
  LayerExecuted,
  AgentHealth,
  HealthResponse,
} from './common';

// Budget enforcement schemas
export {
  BudgetScopeTypeSchema,
  BudgetScopeSchema,
  BudgetSchema,
  DailySpendSchema,
  SpendDataSchema,
  BudgetEnforcementInputSchema,
  SignalTypeSchema,
  SeveritySchema,
  ViolationTypeSchema,
  RecommendedActionSchema,
  BudgetAlertSchema,
  BudgetEnforcementOutputSchema,
  BudgetDecisionEventSchema,
  BudgetErrorCodeSchema,
  BudgetErrorSchema,
} from './budget';
export type {
  BudgetScopeType,
  BudgetScope,
  Budget,
  DailySpend,
  SpendData,
  BudgetEnforcementInput,
  SignalType,
  Severity,
  ViolationType,
  RecommendedAction,
  BudgetAlert,
  BudgetEnforcementOutput,
  BudgetDecisionEvent,
  BudgetError,
} from './budget';

// Cost forecasting schemas
export {
  ForecastGranularitySchema,
  HistoricalDataPointSchema,
  ForecastConstraintsSchema,
  ForecastMetadataSchema,
  CostForecastInputSchema,
  GrowthPatternSchema,
  RiskLevelSchema,
  ForecastProjectionSchema,
  RiskIndicatorSchema,
  ConstraintResultSchema,
  ConstraintsEvaluationSchema,
  HistoricalSummarySchema,
  CostForecastOutputSchema,
  ForecastDecisionEventSchema,
  ForecastErrorCodeSchema,
  ForecastErrorSchema,
} from './forecast';
export type {
  ForecastGranularity,
  HistoricalDataPoint,
  ForecastConstraints,
  ForecastMetadata,
  CostForecastInput,
  GrowthPattern,
  RiskLevel,
  ForecastProjection,
  RiskIndicator,
  ConstraintResult,
  ConstraintsEvaluation,
  HistoricalSummary,
  CostForecastOutput,
  ForecastDecisionEvent,
  ForecastError,
} from './forecast';

export const CONTRACT_VERSION = '1.0.0';
