import { apiClient } from '@/api/client';
import { env } from '@/shared/config/env';
import { LoginData } from './loginData.types';

export const login = async (params: LoginData) => {
  const { email, password } = params;
  const response = await apiClient.post(`${env.VITE_API_BASE_URL}/login`, {
    email,
    password,
  });
  return response;
};
