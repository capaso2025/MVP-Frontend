import { apiClient } from '@/api/client';
import { GetGoalsResponse } from '../models/get-goals';

export const getActiveGoals = () => {
  try {
    const response = apiClient.get<GetGoalsResponse>('/goal/active');
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
