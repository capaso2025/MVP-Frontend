import { Card } from "../../atoms/Card";
import { Progress } from "../../atoms/Progress";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";

function LevelProgress() {
  return <Card>
    <div className="flex justify-between">
      <div>
        <Typography variant="body2" className="text-gray-500">Nivel 2</Typography>
        <Typography variant="h4" className="font-bold">80%</Typography>

      </div>
      <div>
        <Typography variant="h5">280 XP</Typography>
        <Typography variant="body2" className="text-gray-500">14 gemas</Typography>
      </div>
    </div>
    <Spacer size="md" />
    <Progress value={80} className="bg-gradient-to-r from-primary-light to-primary-dark" />
    <Spacer size="md" />
    <Typography className="text-gray-500">Racha: 6 días</Typography>
  </Card>
};

export default LevelProgress;