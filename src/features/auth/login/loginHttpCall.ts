import { apiClient } from '@/api/client';
import { env } from '@/shared/config/env';
import { LoginData } from './types/loginData.types';
import { LoginApiResponse } from './types/loginApiResponse.types';

export const login = async (params: LoginData) => {
  const { email, password } = params;
  const response = await apiClient.post<LoginApiResponse>(
    `${env.VITE_API_BASE_URL}/login`,
    {
      email,
      password,
    },
  );
  return response;
};
