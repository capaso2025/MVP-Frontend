import { useMutation } from '@tanstack/react-query';
import { createGoals } from '../services/create-goals';
import { CreateGoalPayload, CreateGoalResponse } from '../models/create-goal';
import { useRenderStore } from '@/shared/store/render-store';
import { useGetGoals } from './use-get-goals';

export const useCreateGoal = () => {
  const closeModal = useRenderStore((state) => state.closeModal);
  const { refetch: refetchGoals } = useGetGoals();
  return useMutation<CreateGoalResponse, Error, CreateGoalPayload>({
    mutationKey: ['create-goals'],
    mutationFn: async (payload: CreateGoalPayload) => {
      const response = await createGoals(payload);
      if (!response) throw new Error('No se pudo crear la meta');
      closeModal();
      refetchGoals();
      return response;
    },
  });
};
