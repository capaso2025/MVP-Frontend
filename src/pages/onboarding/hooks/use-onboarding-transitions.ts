import { useEffect, useState } from 'react';
import { useOnboarding } from './use-onboarding';

export const useOnboardingTransitions = ({
  currentIndex,
  goToNext,
  goToPrevious,
}: {
  currentIndex: number;
  goToNext: () => void;
  goToPrevious: () => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { responses, questions } = useOnboarding();
  const [questionKey, setQuestionKey] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleNext = () => {
    if (responses.find((resp) => resp.id === questions[currentIndex]?.id)) {
      setDirection('forward');
      setIsAnimating(true);
      setTimeout(() => {
        goToNext();
        setIsAnimating(false);
        setQuestionKey((prev) => prev + 1);
      }, 200);
    }
  };

  const handlePrevious = () => {
    setDirection('backward');
    setIsAnimating(true);
    setTimeout(() => {
      goToPrevious();
      setIsAnimating(false);
      setQuestionKey((prev) => prev + 1);
    }, 200);
  };

  useEffect(() => {
    setQuestionKey((prev) => prev + 1);
  }, [currentIndex]);

  return {
    isAnimating,
    questionKey,
    direction,
    handleNext,
    handlePrevious,
  };
};
