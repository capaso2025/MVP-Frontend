import { Button, Icon } from '@/shared/ui';
import { useTimer } from '../hooks/use-timer';

function TimerActions() {
  const { isActive, isPaused, startTimer, pauseTimer, resetTimer, skipTimer } =
    useTimer();
  return (
    <>
      {!isActive || isPaused ? (
        <Button onClick={startTimer} className="w-32">
          <Icon name="play" />
          Iniciar
        </Button>
      ) : (
        <Button onClick={pauseTimer} className="w-32">
          <Icon name="pause" />
          Pausar
        </Button>
      )}
      <Button variant="outline" onClick={resetTimer}>
        <Icon name="rotate-ccw" />
        Reiniciar
      </Button>
      <Button variant="outline" onClick={skipTimer}>
        <Icon name="skip-forward" />
        Saltar
      </Button>
    </>
  );
}

export default TimerActions;
