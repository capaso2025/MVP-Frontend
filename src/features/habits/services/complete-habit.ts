import { apiClient } from '@/api/client';
import { CompleteHabitResponse } from '../models/complete-habit';

export const completeHabit = async (id: string) => {
  try {
    const response = await apiClient.post<CompleteHabitResponse>(
      `/habit-user/${id}/complete`,
      {},
    );
    return response;
  } catch (error) {
    console.error('Error completing habit:', error);
    throw error;
  }
};
