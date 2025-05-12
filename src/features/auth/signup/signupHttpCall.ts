import { apiClient } from '@/api/client';
import { SignupData } from './signupData.types';
import { env } from '@/shared/config/env';

export const signup = async (params: SignupData) => {
  const { email, password, name, lastName, birthdate } = params;
  const response = apiClient.post(`${env.VITE_API_BASE_URL}/register`, {
    email,
    password,
    name,
    lastName,
    birthdate,
  });
  return response;
};
