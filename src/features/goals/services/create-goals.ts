import { apiClient } from '@/api/client';
import { CreateGoalPayload, CreateGoalResponse } from '../models/create-goal';

export const createGoals = async (
  data: CreateGoalPayload,
): Promise<CreateGoalResponse | null> => {
  try {
    const response = await apiClient.post<CreateGoalResponse>('/goal', data);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
