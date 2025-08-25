import { apiClient } from '@/api/client';
import { GetInfoApiResponse } from './get-info-response';

export const getInfo = async () => {
  const response = await apiClient.get<GetInfoApiResponse>('/auth/info', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('t') || ''}`,
    },
  });
  return response;
};
