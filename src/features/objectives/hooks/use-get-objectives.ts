import { useQuery } from '@tanstack/react-query';
import { getObjectives } from '../services/get-objectives';
import { GetObjectivesResponse } from '../models/get-objectives';

export const useGetObjectives = (goalId: string) => {
  return useQuery<GetObjectivesResponse>({
    queryKey: ['objectives', goalId],
    queryFn: () => getObjectives(goalId),
    refetchOnMount: true,
    staleTime: 0,
  });
};
