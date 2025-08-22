import { apiClient } from '@/api/client';
import { GetProfileResponse } from './types/getProfileResponse.types';

export const getProfileHttpCall = async () => {
  const response = apiClient.get<GetProfileResponse>(`/profile`);
  return response;
};
