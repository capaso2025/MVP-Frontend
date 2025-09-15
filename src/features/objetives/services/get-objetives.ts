import { apiClient } from '@/api/client';
import { GetObjetivesResponse } from '../models/get-objetives';

export const getObjetives = async (goalId: string) => {
  try {
    const response = await apiClient.get<GetObjetivesResponse>(
      `/objetive/goal/${goalId}`,
    );
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
