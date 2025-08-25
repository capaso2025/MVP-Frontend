import { apiClient } from '@/api/client';
import { LoginData } from './login-data';
import { LoginApiResponse } from './login-response';

export const login = async (params: LoginData) => {
  const { email, password } = params;
  const response = await apiClient.post<LoginApiResponse>(
    '/auth/log-in',
    {
      email,
      password,
    },
    {},
    false,
  );
  return response;
};
