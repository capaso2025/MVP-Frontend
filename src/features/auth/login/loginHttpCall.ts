import { apiClient } from '@/api/client';
import { LoginData } from './types/loginData.types';
import { LoginApiResponse } from './types/loginApiResponse.types';
import { apiConfig } from '@/shared/config/env';

export const login = async (params: LoginData) => {
  const { email, password } = params;
  const response = await apiClient.post<LoginApiResponse>(
    `${apiConfig.baseUrl}/login`,
    {
      email,
      password,
    },
  );
  return response;
};
