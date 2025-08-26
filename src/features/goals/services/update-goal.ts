import { apiClient } from '@/api/client';
import { Goal } from '../models/goal';
import { UpdateGoalPayload, UpdateGoalResponse } from '../models/update-goal';

export const updateGoal = async (
  data: UpdateGoalPayload,
): Promise<UpdateGoalResponse | null> => {
  try {
    const { id, ...updateData } = data;
    const response = await apiClient.patch<UpdateGoalResponse, Partial<Goal>>(
      `/goal/${id}`,
      updateData,
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
