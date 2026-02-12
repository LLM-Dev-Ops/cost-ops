# Cost Authority Policy

**Status:** Active
**Effective:** 2026-02-12
**Owners:** @maintainer-team, @governance-team

---

LLM-CostOps is the **single authoritative source** for all LLM cost calculations,
pricing data, and financial metrics across the organization. No other service,
repository, or team may independently compute or estimate LLM costs.

## Scope

This policy applies to:

- All cost numbers displayed in dashboards, reports, or APIs
- All pricing tables and rate cards
- All budget enforcement decisions
- All cost forecasts and projections
- All cost attribution and chargeback calculations
- All ROI and cost-efficiency metrics

## Core Principles

### 1. Single Source of Truth

No service may independently calculate LLM costs. All cost figures **MUST**
originate from the LLM-CostOps API or its official SDKs (Rust, TypeScript,
Python).

### 2. Authority Provenance

Every cost-bearing API response carries machine-verifiable authority metadata:

- HTTP header: `X-Cost-Authority: llm-costops`
- JSON field: `cost_authority` object with `source`, `authoritative`, `version`

Downstream consumers can programmatically verify that cost data originated from
the canonical source.

### 3. No Local Replication

Dependent services **MUST NOT**:

- Hardcode token prices or per-model cost rates
- Maintain local pricing tables or rate card copies
- Perform independent cost-per-token calculations
- Cache cost values beyond their stated TTL

### 4. SDK-Only Access

Cost data **MUST** be consumed through official SDKs or the REST API directly.
Re-implementing calculation logic, scraping responses, or reverse-engineering
pricing algorithms is prohibited.

## Enforcement Levels

### Level 1: Advisory

- This policy document and ADR-001
- SDK warnings for non-authoritative usage patterns
- PR review checklists

### Level 2: CI Enforcement

- Reusable GitHub Actions workflow (`cost-authority-lint.yml`) detects local
  cost calculations via pattern matching
- Dependent repositories adopt the workflow as a required status check
- Patterns detected: hardcoded prices, local calculation functions, local
  pricing tables, direct token-to-cost arithmetic

### Level 3: Runtime Enforcement

- API responses carry `X-Cost-Authority` header and `cost_authority` JSON field
- SDK clients validate authority metadata on every response
- Webhook/ingestion payloads include provenance metadata

## Compliance Requirements

### For Dependent Services

1. **MUST** use official SDKs to fetch cost data
2. **MUST NOT** cache cost data beyond the `max-age` in `Cache-Control`
3. **MUST** propagate `cost_authority` metadata when forwarding cost data
4. **MUST** include the `cost-authority-lint.yml` CI workflow in their repo
5. **MUST NOT** define functions named `calculate_cost`, `compute_cost`,
   `estimate_cost` or equivalent that perform LLM cost calculations

### For SDK Consumers

1. SDK responses include `costAuthority` / `cost_authority` metadata automatically
2. Consumers **SHOULD** verify `authoritative === true` on cost-bearing responses
3. Consumers **SHOULD** log a warning if authority metadata is absent

### For Contributors to This Repository

1. Cost calculation logic lives exclusively in `crates/llm-cost-ops/src/domain/`
   and `crates/llm-cost-ops/src/engine/`
2. API response types for cost data **MUST** include `CostAuthority` metadata
3. Changes to cost calculation methodology require a MINOR or MAJOR version bump
   per [VERSIONING.md](VERSIONING.md)
4. SDK type parity must be maintained across Rust, TypeScript, and Python

## Exceptions

Exceptions to this policy require written approval from @maintainer-team and
@governance-team. Document exceptions in a GitHub Discussion with the
`cost-authority-exception` label. Approved exceptions must specify:

- Scope and duration of the exception
- Justification for local computation
- Plan to migrate to SDK-based access

## Related Documents

- [ADR-001: CostOps as Single Source of Truth](../adr/001-costops-single-source-of-truth.md)
- [VERSIONING.md](VERSIONING.md)
- [DEPRECATION.md](DEPRECATION.md)
