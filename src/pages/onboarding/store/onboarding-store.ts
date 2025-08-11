import { create } from 'zustand';
export interface ResponseQuestion {
  id: string;
  response: {
    value: string;
  };
}
interface OnboardingState {
  registerData: {
    name: string;
    age: number;
  };
  setRegisterData: (data: { key: string; value: string | number }) => void;
  responses: ResponseQuestion[];
  setResponsesByQuestion: (response: ResponseQuestion) => void;
}
export const useOnboardingStore = create<OnboardingState>((set) => ({
  registerData: {
    name: '',
    age: 0,
  },
  setRegisterData: (data: { key: string; value: string | number }) => {
    set((state) => ({
      registerData: {
        ...state.registerData,
        [data.key]: data.value,
      },
    }));
  },
  responses: [],
  setResponsesByQuestion: (res: ResponseQuestion) => {
    set((state) => {
      const { id, response } = res;
      const existingResponseIndex = state.responses.findIndex(
        (resp) => resp.id === id,
      );
      if (existingResponseIndex !== -1) {
        const updatedResponses = [...state.responses];
        updatedResponses[existingResponseIndex] = {
          ...updatedResponses[existingResponseIndex],
          id,
          response,
        };
        return { responses: updatedResponses };
      }
      return {
        responses: [
          ...state.responses,
          {
            id,
            response,
          },
        ],
      };
    });
  },
}));
