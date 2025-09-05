import { Card } from "@/shared/ui/atoms/Card";
import { Typography } from "@/shared/ui";
import Spacer from "@/shared/ui/atoms/Spacer";
import { ITEMS } from "../../constants/habits-categories";
import { useGetHabits } from "@/features/habits/hooks/use-get-habits";
import { useNavigate } from "@tanstack/react-router";

export default function ResumeHabits() {
  const { data } = useGetHabits();
  const navigate = useNavigate();

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {
      data.map((habit) => {
        const item = ITEMS.find(i => i.key === habit.habit.name)
        if (!item) return null;
        return <Card withHover className="text-center" onClick={() => {
          navigate({
            to: `/home/habits/detail/${habit.id}`,
          })
        }}>
          <img className="mx-auto w-[80px] h-[80px]" src={item?.image} width={80} height={80} />
          <Typography variant="h5" className="font-semibold">{item?.title}</Typography>
          <Spacer size="md" />
          <Typography variant="body2" className="text-gray-600 text-left">Nivel 1</Typography>
        </Card>
      })
    }
  </div>
}
