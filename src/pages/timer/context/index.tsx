import { createContext, useState, useEffect } from 'react';
import {
  Position,
  TimerContextType,
  TimerMode,
} from '../types/TimerContext.types';

const defaultTimes = {
  work: 25 * 60, // 25 minutos
  shortBreak: 5 * 60, // 5 minutos
  longBreak: 15 * 60, // 15 minutos
};

export const TimerContext = createContext<TimerContextType | undefined>(
  undefined,
);

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(defaultTimes.work);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  const [position, setPosition] = useState<Position>({
    x: window.innerWidth - 280,
    y: window.innerHeight - 135,
  });

  // Efecto para el temporizador
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Cuando el temporizador llega a cero
            clearInterval(interval!);

            // Lógica para cambiar automáticamente entre modos
            if (mode === 'work') {
              // Si completamos 4 sesiones de trabajo, tomamos un descanso largo
              if (currentSession % 4 === 0) {
                setMode('longBreak');
                setTimeLeft(defaultTimes.longBreak);
              } else {
                setMode('shortBreak');
                setTimeLeft(defaultTimes.shortBreak);
              }
            } else {
              // Si estábamos en un descanso, volvemos al trabajo
              setMode('work');
              setTimeLeft(defaultTimes.work);

              // Solo incrementamos la sesión después de un descanso
              if (mode === 'shortBreak' || mode === 'longBreak') {
                setCurrentSession((prev) => prev + 1);
              }
            }

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, mode, currentSession]);

  // Iniciar el temporizador
  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // Pausar el temporizador
  const pauseTimer = () => {
    setIsPaused(true);
  };

  // Reiniciar el temporizador
  const resetTimer = () => {
    setIsPaused(true);
    setTimeLeft(defaultTimes[mode]);
  };

  // Saltar al siguiente temporizador
  const skipTimer = () => {
    if (mode === 'work') {
      if (currentSession % 4 === 0) {
        setMode('longBreak');
        setTimeLeft(defaultTimes.longBreak);
      } else {
        setMode('shortBreak');
        setTimeLeft(defaultTimes.shortBreak);
      }
    } else {
      setMode('work');
      setTimeLeft(defaultTimes.work);
      if (mode === 'shortBreak' || mode === 'longBreak') {
        setCurrentSession((prev) => prev + 1);
      }
    }
    setIsActive(false);
    setIsPaused(false);
  };

  // Cambiar el modo manualmente
  const changeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(defaultTimes[newMode]);
    setIsActive(false);
    setIsPaused(false);
  };

  // Alternar entre minimizado y maximizado
  const toggleMinimized = () => {
    setIsMinimized((prev) => !prev);
  };

  // Actualizar la posición
  const updatePosition = (newPosition: Position) => {
    setPosition(newPosition);
  };

  const value = {
    isActive,
    isPaused,
    mode,
    timeLeft,
    isMinimized,
    currentSession,
    position,
    startTimer,
    pauseTimer,
    resetTimer,
    skipTimer,
    setMode: changeMode,
    toggleMinimized,
    updatePosition,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
