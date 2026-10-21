#!/usr/bin/env bash
set -euo pipefail

revision=${COST_OPS_REV:?COST_OPS_REV is required}
repository_url=${COST_OPS_REPOSITORY_URL:-https://github.com/LLM-Dev-Ops/cost-ops}
work_dir=$(mktemp -d /tmp/cost-ops-compat.XXXXXX)
trap 'rm -rf "$work_dir"' EXIT

bash "$(dirname "$0")/verify-cargo-compat.sh" "$repository_url" "$revision" "$work_dir"
