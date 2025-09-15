import { apiClient } from '@/api/client';
import {
  CreateObjetivePayload,
  CreateObjetiveResponse,
} from '../models/create-objetive';

export const createObjetive = async (
  data: CreateObjetivePayload,
): Promise<CreateObjetiveResponse | null> => {
  try {
    const response = await apiClient.post<CreateObjetiveResponse>(
      '/objetive',
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
