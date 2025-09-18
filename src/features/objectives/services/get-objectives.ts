import { apiClient } from '@/api/client';
import { GetObjectivesResponse } from '../models/get-objectives';

export const getObjectives = async (goalId: string) => {
  try {
    const response = await apiClient.get<GetObjectivesResponse>(
      `/objective/goal/${goalId}`,
    );
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
