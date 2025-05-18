import { useTimer } from './hooks/use-timer';
import Tabs from '@/shared/ui/molecules/Tabs';
import { getMaxTime } from './utils';
import TimerActions from './components/TimerActions';
import { TimerMode } from './types/TimerContext.types';
import { TaskList } from './components/TasksList';
import Chronometer from './components/Chronometer';

export default function TimerPage() {
  const { mode, timeLeft, setMode } = useTimer();

  // Calcular minutos y segundos
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((getMaxTime(mode) - timeLeft) / getMaxTime(mode)) * 100;

  return (
    <section>
      <div className="mx-auto flex flex-col items-center p-4">
        <div className="mb-8 w-max">
          <Tabs
            defaultTab="work"
            onChange={(value) => {
              setMode(value as TimerMode);
            }}
            tabs={[
              {
                value: 'work',
                label: 'Aprendizaje',
              },
              {
                value: 'shortBreak',
                label: 'Descanso Corto',
              },
              {
                value: 'longBreak',
                label: 'Descanso Largo',
              },
            ]}
          />
        </div>
        <Chronometer minutes={minutes} seconds={seconds} progress={progress} />
        <div className="mb-6 flex items-center justify-center gap-4">
          <TimerActions />
        </div>
      </div>
      <div className="mt-4 max-h-[800px] overflow-y-auto rounded-lg border border-gray-200 p-6">
        <TaskList />
      </div>
    </section>
  );
}
