import { QUESTIONS } from '../constants/questions';
import { RESULT_MESSAGES } from '../constants/result-messages';
import { useOnboardingStore } from '../store/onboarding-store';

export const useOnboarding = () => {
  const category = useOnboardingStore((state) => state.category);
  const setCategory = useOnboardingStore((state) => state.setCategory);
  const responses = useOnboardingStore((state) => state.responses);
  const setResponsesByQuestion = useOnboardingStore(
    (state) => state.setResponsesByQuestion,
  );
  return {
    category,
    setCategory,
    responses,
    setResponsesByQuestion,
    questions: QUESTIONS,
    resultMessages:
      RESULT_MESSAGES[category as keyof typeof RESULT_MESSAGES] || [],
  };
};
