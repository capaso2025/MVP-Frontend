import { useQuery } from '@tanstack/react-query';
import { GetGoalsResponse } from '../models/get-goals';
import { getActiveGoals } from '../services/get-active-goals';

export const useGetActiveGoals = () => {
  return useQuery<GetGoalsResponse>({
    queryKey: ['active-goals'],
    queryFn: getActiveGoals,
    refetchOnMount: true,
    staleTime: 0,
  });
};
