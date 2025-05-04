import { Button, Icon, Progress } from '@/shared/ui';
import { useTimer } from '../hooks/use-timer';
import { getMaxTime, getModeColor, getModeTitle } from '../utils';

function MinimizedTimer() {
  const {
    isActive,
    isPaused,
    mode,
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    toggleMinimized,
  } = useTimer();

  // Calcular minutos y segundos
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Calcular el progreso

  const progress = ((getMaxTime(mode) - timeLeft) / getMaxTime(mode)) * 100;

  return (
    <div className="bg-primary-light w-64 overflow-hidden rounded-lg text-white shadow-lg">
      <div className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${getModeColor(mode)}`} />
            <span className="text-sm font-medium">{getModeTitle(mode)}</span>
          </div>
          <Button variant="ghost" className="h-6 w-6" onClick={toggleMinimized}>
            <Icon name="maximize" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tabular-nums">
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </div>
          <div className="flex items-center gap-1">
            {!isActive || isPaused ? (
              <Button onClick={startTimer}>
                <Icon name="play" />
              </Button>
            ) : (
              <Button onClick={pauseTimer}>
                <Icon name="pause" />
              </Button>
            )}
            <Button onClick={resetTimer}>
              <Icon name="rotate-ccw" />
            </Button>
          </div>
        </div>

        <Progress value={progress} className="mt-2 h-1" />
      </div>
    </div>
  );
}

export default MinimizedTimer;
