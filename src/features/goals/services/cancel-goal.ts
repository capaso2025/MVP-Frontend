import { apiClient } from '@/api/client';
import { CancelGoalPayload, CancelGoalResponse } from '../models/cancel-goal';

export const cancelGoal = async (
  data: CancelGoalPayload,
): Promise<CancelGoalResponse | null> => {
  try {
    const response = await apiClient.post<CancelGoalResponse>(
      `/goal/${data.id}/cancel`,
      {},
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
