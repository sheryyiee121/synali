import { create, ApisauceInstance, ApiResponse } from "apisauce";

const API_BASE_URL = "http://49.13.102.110:85/api/";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface RequestConfig {
  headers?: Record<string, string>;
}

class ApiClient {
  private api: ApisauceInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.api = create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
      withCredentials: true,
    });

    this.api.addRequestTransform((request) => {
      const token = localStorage.getItem("token");

      if (token) {
        if (!request.headers) {
          request.headers = {};
        }
        request.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
      }
      console.log(
        `Making ${request.method?.toUpperCase()} request to: ${request.url}`
      );
    });

    this.api.addResponseTransform((response) => {
      if (!response.ok) {
        throw new ApiError(
          response.problem || "API request failed",
          response.status || 0,
          response.problem || "Unknown error",
          response.data
        );
      }
    });
  }

  private handleResponse<T>(response: ApiResponse<T>): T {
    if (!response.ok) {
      throw new ApiError(
        response.problem || "API request failed",
        response.status || 0,
        response.problem || "Unknown error"
      );
    }

    return response.data as T;
  }

  async get<T>(endpoint: string, params?: Record<string, unknown>): Promise<T> {
    const response = await this.api.get<T>(endpoint, params);
    return this.handleResponse(response);
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> {
    const headers = {
      ...config?.headers,
      ...(data instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : {}),
    };
    const response = await this.api.post<T>(endpoint, data, { headers });
    return this.handleResponse(response);
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    const response = await this.api.put<T>(endpoint, data);
    return this.handleResponse(response);
  }

  async patch<T>(endpoint: string, data?: unknown): Promise<T> {
    const response = await this.api.patch<T>(endpoint, data);
    return this.handleResponse(response);
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.api.delete<T>(endpoint);
    return this.handleResponse(response);
  }

  setHeader(name: string, value: string) {
    this.api.setHeader(name, value);
  }

  setBaseURL(baseURL: string) {
    this.api.setBaseURL(baseURL);
  }

  getInstance(): ApisauceInstance {
    return this.api;
  }
}

export const apiClient = new ApiClient();
