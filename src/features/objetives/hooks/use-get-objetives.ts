import { useQuery } from '@tanstack/react-query';
import { getObjetives } from '../services/get-objetives';
import { GetObjetivesResponse } from '../models/get-objetives';

export const useGetObjetives = (goalId: string) => {
  return useQuery<GetObjetivesResponse>({
    queryKey: ['objetives', goalId],
    queryFn: () => getObjetives(goalId),
    refetchOnMount: true,
    staleTime: 0,
  });
};
