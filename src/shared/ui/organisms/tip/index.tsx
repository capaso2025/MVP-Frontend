import { Typography } from "@/shared/ui";
import { Card } from "@/shared/ui/atoms/Card";
import Spacer from "@/shared/ui/atoms/Spacer";
import { Lightbulb } from "lucide-react";

function Tip() {
  return <Card className="w-full">
    <div className="flex gap-1">
      <Lightbulb className='text-yellow-500' />
      <Typography className='font-bold'>Tip Rápido</Typography>
    </div>
    <Spacer size='sm' />
    <Typography variant="body2">
      Divide tu meta grande en mini objetivos semanales para avanzar con más
      claridad.
    </Typography>
  </Card>
};

export default Tip;