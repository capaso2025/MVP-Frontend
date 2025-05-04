import { useContext } from 'react';
import { TimerContext } from '../context';
import { TimerContextType } from '../types/TimerContext.types';

export const useTimer: () => TimerContextType = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
