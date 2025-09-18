import { useMutation } from '@tanstack/react-query';
import {
  UpdateObjectiveEventResponse,
  UpdateObjectiveEventPayload,
} from '../models/update-objective-event';
import { updateObjectiveEvent } from '../services/update-objective-event';

export const useUpdateObjectiveEvent = () => {
  return useMutation<
    UpdateObjectiveEventResponse,
    Error,
    UpdateObjectiveEventPayload
  >({
    mutationKey: ['update-objective-event'],
    mutationFn: async (payload: UpdateObjectiveEventPayload) => {
      const response = await updateObjectiveEvent(payload);
      if (!response) throw new Error('No se pudo actualizar el objetivo');
      return response;
    },
  });
};
