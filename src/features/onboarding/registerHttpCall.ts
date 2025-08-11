import { apiClient } from '@/api/client';
import { env } from '@/shared/config/env';
import { RegisterData } from './types/registerData.types';
import { RegisterApiResponse } from './types/registerApiResponse.types';

export const register = async (params: RegisterData) => {
  try {
    const response = await apiClient.post<RegisterApiResponse>(
      `${env.VITE_API_BASE_URL}/auth/sign-up`,
      params,
    );
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};
