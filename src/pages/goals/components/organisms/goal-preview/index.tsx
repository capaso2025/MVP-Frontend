import { Button, Progress, Typography } from "@/shared/ui";
import Badge from "@/shared/ui/atoms/Badge";
import { Card } from "@/shared/ui/atoms/Card";
import Spacer from "@/shared/ui/atoms/Spacer";

function GoalPreview() {
  return <Card>
    <div className="flex items-center justify-between">
      <div>
        <Typography className="font-semibold" variant="h5">
          Mejorar mi físico
        </Typography>
        <Typography
          as="small"
          className="text-gray-600"
          variant="body2"
        >
          Fecha limite: 30 julio
        </Typography>
      </div>

      <Badge text="Salud" className="bg-red-200 text-red-600" />
    </div>
    <Spacer size="lg" />
    <div>
      <div className='flex justify-between mb-2'>
        <Typography variant="body2" >Progreso general</Typography>
        <Typography variant="body2" >75%</Typography>
      </div>
      <Progress value={75} className="bg-primary" />
    </div>
    <Spacer size="md" />
    <Button variant="ghost" className="border border-gray-200" size="sm">
      Actualizar progreso
    </Button>
  </Card>
};

export default GoalPreview;