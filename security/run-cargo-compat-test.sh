#!/usr/bin/env bash
set -euo pipefail

revision=${COST_OPS_REV:-$(git -C "$(dirname "$0")/.." rev-parse HEAD)}
repository_url=${COST_OPS_REPOSITORY_URL:-https://github.com/LLM-Dev-Ops/cost-ops}
export CARGO_TARGET_DIR=${CARGO_TARGET_DIR:-/tmp/llm-dev-ops-cost-ops-target}
work_dir=$(mktemp -d /tmp/cost-ops-compat.XXXXXX)
trap 'rm -rf "$work_dir"' EXIT

bash "$(dirname "$0")/verify-cargo-compat.sh" "$repository_url" "$revision" "$work_dir"
