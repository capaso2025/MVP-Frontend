import { GetGoalsResponse } from "@/features/goals/models/get-goals-response";
import { Button, Progress, Typography } from "@/shared/ui";
import Badge from "@/shared/ui/atoms/Badge";
import { Card } from "@/shared/ui/atoms/Card";
import Spacer from "@/shared/ui/atoms/Spacer";

function GoalPreview(props: {
  goals: GetGoalsResponse | undefined
}) {
  const { goals } = props
  const data = goals?.[0]
  return <Card>
    <div className="flex items-center justify-between">
      <div>
        <Typography className="font-semibold" variant="h5">
          {data?.title}
        </Typography>
        <Typography
          as="small"
          className="text-gray-600"
          variant="body2"
        >
          Fecha limite: {data?.deadline.split('T')[0]?.split('-').reverse().join('/')}
        </Typography>
      </div>

      <Badge text={data?.category || ""} className="bg-red-200 text-red-600" />
    </div>
    <Spacer size="lg" />
    <div>
      <div className='flex justify-between mb-2'>
        <Typography variant="body2">Progreso general</Typography>
        <Typography variant="body2" >{data?.progress || 0}%</Typography>
      </div>
      <Progress value={data?.progress || 0} className="bg-primary" />
    </div>
    <Spacer size="md" />
    <Button variant="ghost" className="border border-gray-200" size="sm">
      Actualizar progreso
    </Button>
  </Card>
};

export default GoalPreview;