import { apiClient } from '@/api/client';
import { GetHabitsResponse } from '../models/get-habits';

export const getHabits = async () => {
  try {
    const response = await apiClient.get<GetHabitsResponse>('/habit-user');
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
