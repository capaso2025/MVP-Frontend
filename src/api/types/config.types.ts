export interface ApiConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
  getHeaders: () => Record<string, string>;
}
