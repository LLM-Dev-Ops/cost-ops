// REST API module for LLM Cost Ops platform

pub mod types;
pub mod error;
pub mod routes;
pub mod handlers;
pub mod middleware;
pub mod server;
pub mod pagination;
pub mod validation;
pub mod execution_context;

pub use types::{ApiVersion, ApiResponse, ApiError as ApiErrorResponse};
pub use error::{ApiError, ApiResult};
pub use server::{ApiServer, ApiServerConfig, create_api_router};
pub use pagination::{PaginationParams, PaginatedResponse};
pub use execution_context::{require_execution_context, InstrumentedResponse};

/// API version constant
pub const API_VERSION: &str = "v1";
pub const API_PREFIX: &str = "/api/v1";
