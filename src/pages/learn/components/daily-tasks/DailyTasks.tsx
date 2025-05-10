import { useRenderStore } from '@/shared/store/render-store';
import DailyTasksListModalContent from './DailyTasksListModalContent';

function DailyTasks() {
  const setModalData = useRenderStore((state) => state.setModalData);
  return (
    <div
      className="rounded-lg border border-gray-200 p-6"
      onClick={() => {
        setModalData({
          children: <DailyTasksListModalContent />,
          containerClassName: '!min-w-[900px] min-h-[500px]',
        });
      }}
    >
      <h2 className="mb-4 text-center text-xl font-bold">
        Recordatorio de Tareas
      </h2>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mt-1 mr-2 inline-block h-4 w-4 border border-black"></span>
          <span>Completado</span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 inline-block h-4 w-4 border border-black"></span>
          <span>En proceso</span>
        </li>
      </ul>
    </div>
  );
}

export default DailyTasks;
