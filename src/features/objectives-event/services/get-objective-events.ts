import { apiClient } from '@/api/client';
import { GetObjectiveEventsResponse } from '../models/get-objective-events';

export const getObjectiveEvents = async (objectiveId?: string) => {
  try {
    if (!objectiveId) return [];
    const response = await apiClient.get<GetObjectiveEventsResponse>(
      `/objective-event/objective/${objectiveId}`,
    );
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
