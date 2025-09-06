import { useMutation } from '@tanstack/react-query';
import { completeHabit } from '../services/complete-habit';

export const useCompleteHabit = () => {
  return useMutation({
    mutationKey: ['complete-habit'],
    mutationFn: async (id: string) => {
      const response = await completeHabit(id);
      console.log('🏝️ ~ useCompleteHabit ~ response:', response);
      return response;
    },
  });
};
