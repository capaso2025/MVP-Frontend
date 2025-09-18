import { useQuery } from '@tanstack/react-query';
import { getObjectiveEvents } from '../services/get-objective-events';
import { GetObjectiveEventsResponse } from '../models/get-objective-events';

export const useGetObjectiveEvents = (objectiveId?: string) => {
  return useQuery<GetObjectiveEventsResponse>({
    queryKey: ['objective-events', objectiveId],
    queryFn: () => getObjectiveEvents(objectiveId),
    refetchOnMount: true,
    staleTime: 0,
    // enabled: false,
  });
};
