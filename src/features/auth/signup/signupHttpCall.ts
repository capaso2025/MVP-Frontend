import { apiClient } from '@/api/client';
import { SignupData } from './signupData.types';

export const signup = async (params: SignupData) => {
  const { email, password, name, lastName, birthdate } = params;
  const response = apiClient.post(`/auth/sign-up`, {
    email,
    password,
    name,
    lastName,
    birthdate,
  });
  return response;
};
