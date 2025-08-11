// Field-level validation errors (e.g., email, password)
export interface FieldErrors {
  [field: string]: string[]; // e.g., "email": ["The email has already been taken."]
}

// Shape of the `data` object returned in error response
export interface ApiErrorResponseData {
  message?: string; // General error message
  errors?: FieldErrors; // Optional field-level errors
  [key: string]: unknown; // Any other custom keys from the backend
}

// Custom ApiError class structure
export interface IApiError extends Error {
  name: "ApiError";
  status: number; // e.g., 422
  statusText: string; // e.g., CLIENT_ERROR
  data?: ApiErrorResponseData; // Optional payload from backend
}
