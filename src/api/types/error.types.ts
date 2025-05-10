export interface ApiErrorData {
  code?: string;
  message: string;
  errors?: Record<string, string[]>;
  details?: unknown;
}
