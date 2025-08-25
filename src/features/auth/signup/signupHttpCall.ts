import { apiClient } from '@/api/client';
import { SignupData } from './signup-data';
import { SignupApiResponse } from './signup-response.types';

export const signup = async (params: SignupData, userId: string) => {
  const { email, password, lastName } = params;
  const response = apiClient.post<SignupApiResponse>(
    `/auth/${userId}/sign-up`,
    {
      email,
      password,
      lastName,
    },
  );
  return response;
};
