import { ApiErrorData } from './types/error.types';

export class ApiError extends Error {
  status: number;
  data?: ApiErrorData;

  constructor(options: {
    status: number;
    message: string;
    data?: ApiErrorData;
  }) {
    super(options.message);
    this.name = 'ApiError';
    this.status = options.status;
    this.data = options.data;
  }

  isNotFound(): boolean {
    return this.status === 404;
  }

  isUnauthorized(): boolean {
    return this.status === 401;
  }

  isForbidden(): boolean {
    return this.status === 403;
  }

  isValidationError(): boolean {
    return this.status === 422;
  }

  isServerError(): boolean {
    return this.status >= 500;
  }
}
