import { useMutation } from '@tanstack/react-query';
import {
  CompleteGoalPayload,
  CompleteGoalResponse,
} from '../models/complete-goal';
import { completeGoal } from '../services/complete-goal';

export const useCompleteGoal = () => {
  return useMutation<CompleteGoalResponse, Error, CompleteGoalPayload>({
    mutationKey: ['complete-goals'],
    mutationFn: async (payload: CompleteGoalPayload) => {
      const response = await completeGoal(payload);
      if (!response) throw new Error('No se pudo completar la meta');
      return response;
    },
  });
};
