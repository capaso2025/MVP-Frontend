import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { IUser } from "@entities/user/api/user-api";

/**
 * Interfaz para el estado de autenticación
 */
export interface IAuthState {
  // Estado
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  // Acciones
  login: (token: string, user: IUser) => void;
  logout: () => void;
  setUser: (user: IUser) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

/**
 * Store de Zustand para gestionar el estado de autenticación
 * Usa persistencia para mantener la sesión entre recargas
 */
export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      // Estado inicial
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false,
      error: null,

      // Acciones
      login: (token, user) =>
        set({
          isAuthenticated: true,
          token,
          user,
          error: null,
        }),

      logout: () =>
        set({
          isAuthenticated: false,
          token: null,
          user: null,
        }),

      setUser: (user) => set({ user }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),
    }),
    {
      name: "auth-storage", // Nombre para localStorage
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        user: state.user,
      }),
    },
  ),
);

/**
 * Selector para verificar autenticación
 */
export const selectIsAuthenticated = (state: IAuthState) =>
  state.isAuthenticated;

/**
 * Selector para obtener el usuario actual
 */
export const selectCurrentUser = (state: IAuthState) => state.user;

/**
 * Selector para obtener el token
 */
export const selectAuthToken = (state: IAuthState) => state.token;

/**
 * Ejemplo de uso en un componente:
 *
 * import { useAuthStore, selectIsAuthenticated } from '@features/auth/model/auth-store';
 *
 * const MyComponent = () => {
 *   const isAuthenticated = useAuthStore(selectIsAuthenticated);
 *   const { login, logout } = useAuthStore();
 *
 *   // ...
 * }
 */
