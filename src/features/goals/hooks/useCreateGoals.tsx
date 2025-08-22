import { useMutation } from "@tanstack/react-query"
import { createGoals } from "../services/create-goals";
import { CreateGoalPayload, CreateGoalResponse } from "../models/create-goal";

// Puedes ajustar el tipo de respuesta según lo que devuelva tu backend


export const useCreateGoals = () => {
  return useMutation<CreateGoalResponse, Error, CreateGoalPayload>({
    mutationKey: ['create-goals'],
    mutationFn: async (payload: CreateGoalPayload) => {
      const response = await createGoals(payload);
      if (!response) throw new Error('No se pudo crear la meta');
      return response;
    },
  });
}