import { apiClient } from '@/api/client';
import {
  CreateObjectivePayload,
  CreateObjectiveResponse,
} from '../models/create-objective';

export const createObjective = async (
  data: CreateObjectivePayload,
): Promise<CreateObjectiveResponse | null> => {
  try {
    const response = await apiClient.post<CreateObjectiveResponse>(
      '/objective',
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
