import { apiClient } from '@/api/client';
import { RegisterData } from './types/registerData.types';
import { RegisterApiResponse } from './types/registerApiResponse.types';

export const onboarding = async (params: RegisterData) => {
  try {
    const response = await apiClient.post<RegisterApiResponse>(
      '/auth/onboarding',
      params,
    );
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};
