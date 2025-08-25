import Categories from '../organisms/categories';
import GoalPreview from '../organisms/goal-preview';
import Objetives from '../organisms/objetives';
import { Typography } from '@/shared/ui';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import Spinner from '@/shared/ui/atoms/Spinner';

export default function Goals() {
  const { data: goals, isFetching } = useGetGoals();

  if (isFetching) return <div className='flex justify-center items-center mt-4'><Spinner /></div>
  return (
    <><div>
      <Typography variant='h5' className='font-semibold mb-2'>Area de vida - META</Typography>
      <Categories goals={goals} />
    </div>
      <GoalPreview goals={goals} />
      <Objetives /></>
  );
}
