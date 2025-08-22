import { create } from 'zustand';
interface IUser {
  id: string;
  avatar: string;
  points: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  isActive: boolean;
  createdAt: string;
  time: string | null;
  profileId: string;
  level: number;
}
export interface IProfile {
  id: string;
  name: string;
  slug: string;
  purpose: string;
  colour: string;
  avatar: string;
  createdAt: string;
}
export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  profile: IProfile | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (token: string, user: IUser) => void;
  logout: () => void;
  setUser: (user: IUser) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setProfile: (profile: IProfile | null) => void;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  isAuthenticated: false,
  user: null,
  profile: null,
  token: null,
  isLoading: false,
  error: null,
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
  setProfile: (profile) => set({ profile }),
}));
