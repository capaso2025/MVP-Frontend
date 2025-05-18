import { Category } from '@/pages/onboarding/constants/categories';
import { create } from 'zustand';

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
export const useOnboardingStore = create<OnboardingState>((set) => ({
  responses: [],
  category: undefined,
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
