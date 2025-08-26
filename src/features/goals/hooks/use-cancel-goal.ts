import { useMutation } from '@tanstack/react-query';
import { CancelGoalPayload, CancelGoalResponse } from '../models/cancel-goal';
import { cancelGoal } from '../services/cancel-goal';

export const useCancelGoal = () => {
  return useMutation<CancelGoalResponse, Error, CancelGoalPayload>({
    mutationKey: ['cancel-goals'],
    mutationFn: async (payload: CancelGoalPayload) => {
      const response = await cancelGoal(payload);
      if (!response) throw new Error('No se pudo cancelar la meta');
      return response;
    },
  });
};
