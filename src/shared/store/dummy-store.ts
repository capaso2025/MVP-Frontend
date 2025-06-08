import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store state type
type DummyState = {
  currentLesson: number;
  nextLesson: () => void;
};

export const useDummyStore = create<DummyState>()(
  persist(
    (set) => ({
      currentLesson: 1,
      nextLesson: () =>
        set((state) => ({
          currentLesson: state.currentLesson + 1,
        })),
    }),
    {
      name: 'dummy-storage', // unique name for localStorage key
    },
  ),
);
