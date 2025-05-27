import { useState } from 'react';

export const useBackNext = (params: {
  length: number;
  finishFn?: () => void;
  previousFn?: () => void;
}) => {
  const { length, finishFn, previousFn } = params;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      finishFn?.();
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      previousFn?.();
    }
  };

  return {
    currentIndex,
    goToNext,
    goToPrevious,
  };
};
