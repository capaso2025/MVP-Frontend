import { apiClient } from '@/api/client';

export const getGoals = () => {
  try {
    const response = apiClient.get('/goals');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
