import { GetGoalsResponse } from '@/features/goals/models/get-goals-response';
import { CATEGORIES } from '@/shared/constants/categories';
import { Progress, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
function Categories(props: {
  goals: GetGoalsResponse
}) {
  const { goals } = props;
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {CATEGORIES.map(({ icon, label, progressClass, id }) => {
      const filteredGoals = goals?.filter(goal => goal.category === id);
      const value = filteredGoals?.length ? Math.round(filteredGoals.reduce((acc, goal) => acc + (goal.progress || 0), 0) / filteredGoals.length) : 0;
      return <Card key={label} className="flex-1">
        <div className="flex items-center justify-between gap-2">
          {icon}
          <Typography>{value}%</Typography>
        </div>
        <Spacer size="sm" />
        <Typography>{label}</Typography>
        <Progress value={value} className={progressClass} />
      </Card>
    })}
  </div>
};

export default Categories;