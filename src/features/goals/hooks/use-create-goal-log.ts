import { useMutation } from '@tanstack/react-query';
import { createGoalLog } from '../services/create-goals-log';
import {
  CreateGoalLogPayload,
  CreateGoalLogResponse,
} from '../models/create-goal-log';

export const useCreateGoalLog = () => {
  return useMutation<CreateGoalLogResponse, Error, CreateGoalLogPayload>({
    mutationKey: ['create-goal-log'],
    mutationFn: async (payload: CreateGoalLogPayload) => {
      const response = await createGoalLog(payload);
      if (!response) throw new Error('No se pudo crear el registro de la meta');
      return response;
    },
  });
};
