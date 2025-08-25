import { create } from 'zustand';
import { IUser } from './types/user.types';
import { IProfile } from './types/profile.types';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  profile: IProfile | null;
  logout: () => void;
  setUser: (user: IUser) => void;
  setProfile: (profile: IProfile | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  isAuthenticated: false,
  user: null,
  profile: null,
  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));
