import Categories from '../organisms/categories';
import { Typography } from '@/shared/ui';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import Spinner from '@/shared/ui/atoms/Spinner';
import ActiveGoals from './active-goals';

export default function Goals() {
  const { data: goals, isFetching } = useGetGoals();

  if (isFetching)
    return (
      <div className="mt-4 flex items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <>
      <div className='mb-8'>
        <Typography variant="h5" className="mb-2 font-semibold">
          Area de vida - META
        </Typography>
        <Categories
          data={goals}
          nameCategoryKey="category"
          progressKey="progress"
        />
      </div>
      <ActiveGoals />
    </>
  );
}
