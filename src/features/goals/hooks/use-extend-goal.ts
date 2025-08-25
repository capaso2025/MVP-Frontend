import { useMutation } from '@tanstack/react-query';
import { ExtendGoalPayload, ExtendGoalResponse } from '../models/extend-goal';
import { extendGoal } from '../services/extend-goal';

export const useExtendGoals = () => {
  return useMutation<ExtendGoalResponse, Error, ExtendGoalPayload>({
    mutationKey: ['extend-goals'],
    mutationFn: async (payload: ExtendGoalPayload) => {
      const response = await extendGoal(payload);
      if (!response) throw new Error('No se pudo extender la meta');
      return response;
    },
  });
};
