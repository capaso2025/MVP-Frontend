import { apiClient } from '@/api/client';
import { ExtendGoalPayload, ExtendGoalResponse } from '../models/extend-goal';

export const extendGoal = async (
  data: ExtendGoalPayload,
): Promise<ExtendGoalResponse | null> => {
  try {
    const response = await apiClient.post<ExtendGoalResponse>(
      `/goal/${data.id}/extend`,
      {},
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
