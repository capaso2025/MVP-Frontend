import { apiClient } from '@/api/client';
import {
  CreateGoalLogPayload,
  CreateGoalLogResponse,
} from '../models/create-goal-log';

export const createGoalLog = async (
  data: CreateGoalLogPayload,
): Promise<CreateGoalLogResponse | null> => {
  try {
    const response = await apiClient.post<CreateGoalLogResponse>(
      '/goal-progress-log',
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
