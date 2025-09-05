import { useGetHabits } from "@/features/habits/hooks/use-get-habits";
import { Card } from "../../atoms/Card";
import { Progress } from "../../atoms/Progress";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";

function LevelProgress() {
  const { data: userHabits } = useGetHabits();
  const data = userHabits?.[0]
  return <Card>
    <div className="flex justify-between">
      <div>
        <Typography variant="body2" className="text-gray-500">Nivel {data?.currentLevel}</Typography>
        <Typography variant="h4" className="font-bold">{0}%</Typography>

      </div>
      <div>
        <Typography variant="h5">0 XP</Typography>
        <Typography variant="body2" className="text-gray-500">0 gemas</Typography>
      </div>
    </div>
    <Spacer size="md" />
    <Progress value={0} className="bg-gradient-to-r from-primary-light to-primary-dark" />
    <Spacer size="md" />
    <Typography className="text-gray-500">Racha: {data?.currentStreak} días</Typography>
  </Card>
};

export default LevelProgress;