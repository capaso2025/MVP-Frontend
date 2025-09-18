import { useMutation } from '@tanstack/react-query';
import {
  CreateObjectivePayload,
  CreateObjectiveResponse,
} from '../models/create-objective';
import { createObjective } from '../services/create-objective';

export const useCreateObjective = () => {
  return useMutation<CreateObjectiveResponse, Error, CreateObjectivePayload>({
    mutationKey: ['create-objectives'],
    mutationFn: async (payload: CreateObjectivePayload) => {
      const response = await createObjective(payload);
      if (!response) throw new Error('No se pudo crear el objetivo');
      return response;
    },
  });
};
