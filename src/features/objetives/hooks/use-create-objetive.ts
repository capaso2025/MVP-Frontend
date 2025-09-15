import { useMutation } from '@tanstack/react-query';
import {
  CreateObjetivePayload,
  CreateObjetiveResponse,
} from '../models/create-objetive';
import { createObjetive } from '../services/create-objetive';

export const useCreateObjetive = () => {
  return useMutation<CreateObjetiveResponse, Error, CreateObjetivePayload>({
    mutationKey: ['create-objetives'],
    mutationFn: async (payload: CreateObjetivePayload) => {
      const response = await createObjetive(payload);
      if (!response) throw new Error('No se pudo crear el objetivo');
      return response;
    },
  });
};
