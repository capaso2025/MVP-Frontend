import { apiConfig } from './config';
import { HttpRequestOptions } from './types/client.types';
import { ApiError } from './error';

export class ApiClient {
  private getHeaders(params: {
    withAuth?: boolean;
    optHeaders?: Record<string, string> | undefined;
  }) {
    const { withAuth = true, optHeaders = {} } = params;
    const headers: Record<string, string> = {};
    if (withAuth) {
      headers['Authorization'] = `bearer ${localStorage.getItem('t')}`;
    }
    if (optHeaders && Object.keys(optHeaders).length > 0) {
      Object.entries(optHeaders).forEach(([key, value]) => {
        headers[key] = value;
      });
    }
    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError({
        status: response.status,
        message: errorData.description ?? response.statusText,
      });
    }

    if (response.status === 204) {
      return {} as T;
    }
    return response.json();
  }
  async get<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const headers = this.getHeaders({ optHeaders: options?.headers });

    const response = await fetch(`${apiConfig.baseUrl}${path}`, {
      method: 'GET',
      headers,
    });

    return this.handleResponse<T>(response);
  }

  async post<T, D = unknown>(
    path: string,
    data: D,
    options?: HttpRequestOptions,
    withAuth = true,
  ): Promise<T> {
    const headers = this.getHeaders({
      optHeaders: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      withAuth,
    });
    const response = await fetch(`${apiConfig.baseUrl}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async put<T, D>(
    path: string,
    data: D,
    options?: HttpRequestOptions,
  ): Promise<T> {
    const headers = this.getHeaders({ optHeaders: options?.headers });

    const response = await fetch(`${apiConfig.baseUrl}${path}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async delete<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const headers = this.getHeaders({ optHeaders: options?.headers });
    const response = await fetch(`${apiConfig.baseUrl}${path}`, {
      method: 'DELETE',
      headers,
    });

    return this.handleResponse<T>(response);
  }
}

export const apiClient = new ApiClient();
