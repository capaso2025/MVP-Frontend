import { useMutation, useQuery } from "@tanstack/react-query";

import type { IUpdateUserRequest, IUser } from "./user-api";
import { userApi } from "./user-api";

/**
 * Claves para consultas relacionadas con usuarios
 */
export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: unknown) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
  current: () => [...userKeys.all, "current"] as const,
};

/**
 * Hook para obtener datos de un usuario
 * @param userId - ID del usuario
 */
export const useUserQuery = (userId: string) => {
  return useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: () => userApi.getUser(userId),
  });
};

/**
 * Hook para obtener datos del usuario actual
 */
export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: userKeys.current(),
    queryFn: () => userApi.getCurrentUser(),
  });
};

/**
 * Hook para actualizar datos de un usuario
 */
export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: ({
      userId,
      data,
    }: {
      userId: string;
      data: IUpdateUserRequest;
    }) => userApi.updateUser(userId, data),
    // Configuraciones adicionales
    onSuccess: (updatedUser: IUser, { userId }) => {
      // Aquí podemos invalidar consultas o actualizar el caché
      return { userId, updatedUser };
    },
  });
};
