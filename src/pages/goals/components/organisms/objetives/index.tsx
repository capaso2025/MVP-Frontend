import { useGetObjetives } from '@/features/objetives/hooks/use-get-objetives';
import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import Spinner from '@/shared/ui/atoms/Spinner';
import { format } from 'date-fns';
import { Calendar, Circle, PlusIcon } from 'lucide-react';
import CreateObjetivesForm from '../../templates/create-objetives-form';

function Objetives(props: { show: boolean; goalId: string }) {
  const { show, goalId } = props;
  const setModalData = useRenderStore((state) => state.setModalData);
  const { data: objectives, isLoading } = useGetObjetives(goalId);

  const handleAddObjetives = () => {
    setModalData({
      containerClassName: 'bg-white',
      title: 'Crear objetivo específico',
      children: <CreateObjetivesForm goalId={goalId} />,
    });
  };

  if (!show) return <></>;

  if (isLoading)
    return (
      <div className="mt-4 grid place-content-center">
        <Spinner className="scale-50" />
      </div>
    );
  return (
    <>
      <div className="flex items-center justify-between">
        <Typography variant="body2">Objetivos específicos</Typography>
        <Button onClick={handleAddObjetives} variant="ghost">
          <PlusIcon size={20} />
          <Typography variant="body2">Añadir</Typography>
        </Button>
      </div>
      {!objectives?.length ? (
        <Typography className="text-foreground-secondary text-center">
          No hay objetivos específicos
        </Typography>
      ) : (
        objectives?.map((objective) => (
          <div
            key={objective.id}
            className="border border-primary-light/15 mb-2 flex items-start gap-4 rounded-lg p-4"
          >
            <Circle size={20} />
            <div>
              <Typography variant="body2">{objective.title}</Typography>
              <Typography
                variant="caption"
                className="text-foreground-secondary"
              >
                {objective.notes}
              </Typography>
              <Typography
                variant="caption"
                className="text-foreground-secondary mt-2 flex items-center gap-1"
              >
                <Calendar size={14} />
                {format(objective.startDate, 'dd-MM-yyyy')}
              </Typography>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Objetives;
