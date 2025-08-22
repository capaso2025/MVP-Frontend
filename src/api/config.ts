import { ApiConfig } from './types/config.types';

export const apiConfig: ApiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  defaultHeaders: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  getHeaders: function () {
    return {
      ...this.defaultHeaders,
    };
  },
};
