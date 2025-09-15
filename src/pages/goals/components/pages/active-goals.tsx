import Spacer from '@/shared/ui/atoms/Spacer';
import Spinner from '@/shared/ui/atoms/Spinner';
import GoalPreview from '../organisms/goal-preview';
import { Button, Typography } from '@/shared/ui';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';

function ActiveGoals() {
  const { data: goals, isFetching, refetch } = useGetGoals();
  return (
    <div>
      <div className="flex items-center justify-between">
        <Typography variant='h5' className='font-semibold mb-2'>Metas activas</Typography>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Actualizar
        </Button>
      </div>
      <Spacer size="md" />
      {isFetching ? (
        <div className="mt-16 grid place-content-center">
          <Spinner />
        </div>
      ) : !goals?.length ? <Typography>No tienes metas activas</Typography> : (
        <div className="flex flex-col gap-4">
          {goals
            ?.filter((goal) => goal.status !== "FAILED")
            .map((goal) => <GoalPreview key={goal.id} data={goal} />)}
        </div>
      )}
    </div>
  );
}

export default ActiveGoals;
