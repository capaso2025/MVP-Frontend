export type TimerMode = 'work' | 'shortBreak' | 'longBreak';

export interface Position {
  x: number;
  y: number;
}

export interface TimerContextType {
  isActive: boolean;
  isPaused: boolean;
  mode: TimerMode;
  timeLeft: number;
  isMinimized: boolean;
  currentSession: number;
  position: Position;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  skipTimer: () => void;
  setMode: (mode: TimerMode) => void;
  toggleMinimized: () => void;
  updatePosition: (position: Position) => void;
}
