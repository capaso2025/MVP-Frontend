export class ApiError extends Error {
  status: number;

  constructor(options: { status: number; message: string }) {
    super(options.message);
    this.name = 'ApiError';
    this.status = options.status;
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
