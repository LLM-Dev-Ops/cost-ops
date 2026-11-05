#!/usr/bin/env bash
set -euo pipefail

repo_url=${1:?repository URL is required}
revision=${2:?revision is required}
work_dir=${3:?work directory is required}

mkdir -p "$work_dir/src"
cat >"$work_dir/Cargo.toml" <<EOF
[package]
name = "cost-ops-consumer-contract"
version = "0.0.0"
edition = "2021"
publish = false

[dependencies]
cost-ops = { git = "$repo_url", rev = "$revision" }
EOF

cat >"$work_dir/src/lib.rs" <<'EOF'
use cost_ops::{CostCalculator, CostRecord};

pub fn compatibility_surface() -> (&'static str, usize, usize) {
    (
        cost_ops::VERSION,
        std::mem::size_of::<CostCalculator>(),
        std::mem::size_of::<CostRecord>(),
    )
}

#[cfg(test)]
mod tests {
    #[test]
    fn facade_is_consumable() {
        let (version, _, _) = super::compatibility_surface();
        assert_eq!(version, "0.1.1");
    }
}
EOF

cargo test --manifest-path "$work_dir/Cargo.toml"
