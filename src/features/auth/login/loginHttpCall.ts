import { apiClient } from '@/api/client';
import { LoginData } from './types/loginData.types';
import { LoginApiResponse } from './types/loginApiResponse.types';

export const login = async (params: LoginData) => {
  const { email, password } = params;
  const response = await apiClient.post<LoginApiResponse>('/auth/log-in', {
    email,
    password,
  });
  return response;
};
