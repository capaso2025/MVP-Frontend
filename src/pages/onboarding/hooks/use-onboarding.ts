import { QUESTIONS } from '../constants/questions';
import { useOnboardingStore } from '../store/onboarding-store';

export const useOnboarding = () => {
  const responses = useOnboardingStore((state) => state.responses);
  const setResponsesByQuestion = useOnboardingStore(
    (state) => state.setResponsesByQuestion,
  );
  return {
    responses,
    setResponsesByQuestion,
    questions: QUESTIONS,
  };
};
