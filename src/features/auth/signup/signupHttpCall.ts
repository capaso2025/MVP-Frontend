import { apiClient } from '@/api/client';
import { SignupData } from './signupData.types';
import { apiConfig } from '@/shared/config/env';

export const signup = async (params: SignupData) => {
  const { email, password, name, lastName, birthdate } = params;
  const response = apiClient.post(`${apiConfig.baseUrl}/register`, {
    email,
    password,
    name,
    lastName,
    birthdate,
  });
  return response;
};
