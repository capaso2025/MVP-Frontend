import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store state type
type DummyState = {
  currentLesson: number;
  nextLesson: () => void;
  role?: 'teacher' | 'student' | 'admin';
  setRole: (role: 'teacher' | 'student' | 'admin') => void;
};

export const useDummyStore = create<DummyState>()(
  persist(
    (set) => ({
      currentLesson: 1,
      nextLesson: () =>
        set((state) => ({
          currentLesson: state.currentLesson + 1,
        })),
      role: 'student',
      setRole: (role) =>
        set(() => ({
          role,
        })),
    }),
    {
      name: 'dummy-storage', // unique name for localStorage key
    },
  ),
);
