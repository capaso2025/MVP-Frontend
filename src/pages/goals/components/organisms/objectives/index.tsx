import { useGetObjectives } from '@/features/objectives/hooks/use-get-objectives';
import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import Spinner from '@/shared/ui/atoms/Spinner';
import { format } from 'date-fns';
import { Calendar, Circle, PlusIcon } from 'lucide-react';
import CreateObjectivesForm from '../../templates/create-objectives-form';
import ObjectiveEventsDetails from '../objective-events-details';

function Objectives(props: { show: boolean; goalId: string }) {
  const { show, goalId } = props;
  const setModalData = useRenderStore((state) => state.setModalData);
  const { data: objectives, isLoading } = useGetObjectives(goalId);

  const handleAddObjectives = () => {
    setModalData({
      containerClassName: 'bg-white',
      title: 'Crear objetivo específico',
      children: <CreateObjectivesForm goalId={goalId} />,
    });
  };

  const handleOpenObjectiveEventsDetails = (objectiveId: string) => {
    setModalData({
      containerClassName: 'bg-white h-[71vh]',
      children: <ObjectiveEventsDetails objectiveId={objectiveId} />,
    })
  }


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
        <Button onClick={handleAddObjectives} variant="ghost">
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
            className="border cursor-pointer hover:bg-primary/10 transition-all duration-200 border-primary-light/15 mb-2 flex items-start gap-4 rounded-lg p-4"
            onClick={() => handleOpenObjectiveEventsDetails(objective.id)}
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

export default Objectives
