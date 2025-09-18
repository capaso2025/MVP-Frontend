import { apiClient } from '@/api/client';
import {
  UpdateObjectiveEventPayload,
  UpdateObjectiveEventResponse,
} from '../models/update-objective-event';

export const updateObjectiveEvent = async (
  data: UpdateObjectiveEventPayload,
): Promise<UpdateObjectiveEventResponse | null> => {
  try {
    const response = await apiClient.post<UpdateObjectiveEventResponse>(
      `/objective-event/${data.id}/${data.action}`,
      {},
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
