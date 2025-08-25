import { apiClient } from '@/api/client';
import { GetGoalsResponse } from '../models/get-goals-response';

export const getGoals = () => {
  try {
    const response = apiClient.get<GetGoalsResponse>('/goal');
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
