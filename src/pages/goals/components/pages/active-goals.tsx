import { useGetActiveGoals } from "@/features/goals/hooks/use-get-active-goals";
import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import Spinner from "@/shared/ui/atoms/Spinner";
import GoalPreview from "../organisms/goal-preview";

function ActiveGoals() {
  const { data: goals, isFetching } = useGetActiveGoals();
  if (isFetching) return <div className='flex justify-center items-center mt-4'><Spinner /></div>
  return <div>
    <ModuleTitle text='Metas Activas' />
    <Spacer size="md" />
    <GoalPreview goals={goals} />
  </div>
}

export default ActiveGoals;