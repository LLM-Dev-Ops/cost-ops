//! Backward-compatible package facade for ecosystem consumers.
//!
//! The canonical implementation remains [`llm_cost_ops`]. This package exists
//! for repositories that historically declared a Git dependency named
//! `cost-ops` before the implementation package was renamed to
//! `llm-cost-ops`.

pub use llm_cost_ops::*;

#[cfg(test)]
mod tests {
    use super::{CostCalculator, CostRecord, VERSION};

    #[test]
    fn facade_exports_the_canonical_api() {
        let _calculator_type = std::any::TypeId::of::<CostCalculator>();
        let _record_type = std::any::TypeId::of::<CostRecord>();

        assert_eq!(VERSION, env!("CARGO_PKG_VERSION"));
    }
}
