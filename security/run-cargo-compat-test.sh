#!/usr/bin/env bash
set -euo pipefail

revision=${COST_OPS_REV:-$(git -C "$(dirname "$0")/.." rev-parse HEAD)}
repository_url=${COST_OPS_REPOSITORY_URL:-https://github.com/LLM-Dev-Ops/cost-ops}
repo_root=$(git -C "$(dirname "$0")/.." rev-parse --show-toplevel)
export CARGO_TARGET_DIR=${CARGO_TARGET_DIR:-"$repo_root/.metaharness-cargo-target"}
export CARGO_INCREMENTAL=${CARGO_INCREMENTAL:-0}
export CARGO_PROFILE_DEV_DEBUG=${CARGO_PROFILE_DEV_DEBUG:-0}
export RUSTUP_TOOLCHAIN=${RUSTUP_TOOLCHAIN:-stable}
work_root=${COST_OPS_WORK_ROOT:-$(dirname "$CARGO_TARGET_DIR")}
mkdir -p "$work_root"
work_dir=$(mktemp -d "$work_root/cost-ops-compat.XXXXXX")
trap 'rm -rf "$work_dir"' EXIT

bash "$(dirname "$0")/verify-cargo-compat.sh" "$repository_url" "$revision" "$work_dir"
