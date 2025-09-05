import { apiClient } from '@/api/client';
import { CancelGoalPayload, CancelGoalResponse } from '../models/cancel-goal';

export const cancelGoal = async (
  data: CancelGoalPayload,
): Promise<CancelGoalResponse | null> => {
  try {
    throw new Error('Simulated error for testing purposes');
    const response = await apiClient.post<CancelGoalResponse>(
      `/goal/${data.id}/cancel`,
      {},
    );
    return response;
  } catch (error) {
    console.error('Error canceling goal:', error);
    throw error;
  }
};
