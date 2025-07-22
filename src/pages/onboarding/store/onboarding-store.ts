import { create } from 'zustand';
import { Category } from '../types/categories';

export interface ResponseQuestion {
  title: string;
  response: {
    id: string;
    value: string;
  };
}
interface OnboardingState {
  responses: ResponseQuestion[];
  setResponsesByQuestion: (response: ResponseQuestion) => void;
  category: Category | undefined;
  setCategory: (category: Category) => void;
}
import type { PersistOptions } from 'zustand/middleware';

type OnboardingPersist = PersistOptions<OnboardingState>;

export const useOnboardingStore = create<
  OnboardingState,
  [['zustand/persist', OnboardingPersist]]
>((set) => ({
  responses: [],
  category: 'capaso-ia',
  setCategory: (category: Category) => {
    set(() => ({
      category,
    }));
  },
  setResponsesByQuestion: (res: ResponseQuestion) => {
    set((state) => {
      const { title, response } = res;
      const existingResponseIndex = state.responses.findIndex(
        (resp) => resp.title === title,
      );
      if (existingResponseIndex !== -1) {
        const updatedResponses = [...state.responses];
        updatedResponses[existingResponseIndex] = {
          ...updatedResponses[existingResponseIndex],
          title,
          response,
        };
        return { responses: updatedResponses };
      }
      return {
        responses: [
          ...state.responses,
          {
            title,
            response,
          },
        ],
      };
    });
  },
}));
