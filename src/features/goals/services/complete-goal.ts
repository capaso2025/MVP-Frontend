import { apiClient } from '@/api/client';
import {
  CompleteGoalPayload,
  CompleteGoalResponse,
} from '../models/complete-goal';

export const completeGoal = async (
  data: CompleteGoalPayload,
): Promise<CompleteGoalResponse | null> => {
  try {
    const response = await apiClient.post<CompleteGoalResponse>(
      `/goal/${data.id}/complete`,
      {},
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
