import { useMutation } from '@tanstack/react-query';
import { UpdateGoalPayload, UpdateGoalResponse } from '../models/update-goal';
import { updateGoal } from '../services/update-goal';

export const useUpdateGoal = () => {
  return useMutation<UpdateGoalResponse, Error, UpdateGoalPayload>({
    mutationKey: ['update-goals'],
    mutationFn: async (payload: UpdateGoalPayload) => {
      const response = await updateGoal(payload);
      if (!response) throw new Error('No se pudo actualizar la meta');
      return response;
    },
  });
};
