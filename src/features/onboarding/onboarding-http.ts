import { apiClient } from '@/api/client';
import { OnboardingData } from './types/onboarding-data';
import { OnboardingApiResponse } from './types/onboarding-response';

export const onboarding = async (params: OnboardingData) => {
  try {
    const response = await apiClient.post<OnboardingApiResponse>(
      '/auth/onboarding',
      params,
    );
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};
