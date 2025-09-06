import { apiClient } from '@/api/client';
import { GetGoalsResponse } from '../models/get-goals';

export const getGoals = async () => {
  try {
    const response = await apiClient.get<GetGoalsResponse>('/goal');
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
