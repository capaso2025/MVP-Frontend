import { Button } from '@/shared/ui';
import { useTimer } from '../hooks/use-timer';
import { PauseIcon, PlayIcon, RotateCcwIcon, SkipForwardIcon } from '@/shared/ui/atoms/Icon/Icon';

function TimerActions() {
  const { isActive, isPaused, startTimer, pauseTimer, resetTimer, skipTimer } =
    useTimer();
  return (
    <>
      {!isActive || isPaused ? (
        <Button onClick={startTimer} className="w-32">
          <PlayIcon />
          Iniciar
        </Button>
      ) : (
        <Button onClick={pauseTimer} className="w-32">
          <PauseIcon />
          Pausar
        </Button>
      )}
      <Button variant="outline" onClick={resetTimer}>
        <RotateCcwIcon />
        Reiniciar
      </Button>
      <Button variant="outline" onClick={skipTimer}>
        <SkipForwardIcon />
        Saltar
      </Button>
    </>
  );
}

export default TimerActions;
