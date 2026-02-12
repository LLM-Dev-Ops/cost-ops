# ADR-001: LLM-CostOps as Single Source of Truth for Cost Data

## Status

Accepted

## Date

2026-02-12

## Context

Multiple services in the LLM DevOps ecosystem consume cost data. Without a
centralized authority, teams risk maintaining divergent pricing tables,
duplicating calculation logic, and producing inconsistent cost figures across
dashboards, reports, and budget enforcement. Inconsistent cost data undermines
financial governance, budgeting, forecasting, and chargeback accuracy.

The LLM-CostOps platform already owns cost calculation, pricing management,
attribution, and forecasting. Formalizing this ownership and adding enforcement
mechanisms prevents drift before it occurs.

## Decision

LLM-CostOps is designated as the **single authoritative source** for all LLM
cost calculations, pricing data, and financial metrics. This is enforced at
three layers:

1. **Governance** -- `COST_AUTHORITY.md` policy document establishing rules
2. **Code** -- API response metadata (`CostAuthority` struct, `X-Cost-Authority`
   header), SDK interceptors that validate provenance
3. **CI** -- Reusable lint workflow detecting local cost calculations in
   dependent repositories

All cost-bearing API responses include:

- HTTP header: `X-Cost-Authority: llm-costops`
- JSON field: `cost_authority` object with `source`, `version`, `authoritative`

## Consequences

### Positive

- Single source of truth eliminates cost discrepancies across the ecosystem
- Authority metadata enables machine-verifiable provenance
- CI lint catches drift before it reaches production
- Clear ownership reduces ambiguity in incident response

### Negative

- Dependent services must adopt SDK or API integration (migration cost)
- Slightly larger response payloads due to authority metadata (negligible)
- CostOps becomes a critical dependency for cost-consuming services

### Mitigations

- SDK caching with TTL provides resilience if CostOps is temporarily unavailable
- Graceful degradation patterns documented in SDK guides
- CI lint runs in `warning` mode initially to ease adoption

## Alternatives Considered

### Convention-only (no enforcement)

Rejected. Conventions drift over time without automated checks. Teams may
unknowingly hardcode prices in local configs.

### Shared library approach

Rejected. A shared pricing library still allows divergent pricing data if
different services pin different versions. A service-based approach (API + SDK)
ensures all consumers get the same authoritative prices at query time.

### Event-sourced cost ledger

Deferred for future consideration. An append-only cost ledger could provide
stronger auditability, but adds significant infrastructure complexity. The
current API-based approach is sufficient for initial enforcement.
