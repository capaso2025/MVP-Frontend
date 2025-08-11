import { apiClient } from '@/api/client';
import { env } from '@/shared/config/env';
import { GetProfileResponse } from './types/getProfileResponse.types';

export const getProfileHttpCall = async () => {
  const response = apiClient.get<GetProfileResponse>(
    `${env.VITE_API_BASE_URL}/profile`,
  );
  return response;
};
