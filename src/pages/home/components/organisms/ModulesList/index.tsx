import { Button, Progress, Typography } from "@/shared/ui";
import { Card } from "@/shared/ui/atoms/Card";
import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import { Flag, Lightbulb, SquareChartGantt, Timer } from "lucide-react";

const MODULES = [
  {
    icon: <Lightbulb className="text-primary" />,
    title: 'Enfocar tu atención',
  },
  {
    icon: <SquareChartGantt className="text-primary" />,
    title: 'Planificar sin caos',
  },
  {
    icon: <Flag className="text-primary" />,
    title: 'Establecer metas claras',
  },
  {
    icon: <Timer className="text-primary" />,
    title: 'Domina tu tiempo',
  },
];
function ModulesList() {
  return <div className="relative">
    <div className="absolute top-0 grid place-content-center left-0 right-0 bottom-0 bg-background/40 z-[100]">
      <Typography variant="h2">Próximamente</Typography>
    </div>
    <div className="opacity-50">
      <ModuleTitle text='Tus módulos recomendados' />
    </div>
    <Spacer size="md" />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 opacity-50">
      {MODULES.map((el) => (
        <Card>
          <div className="flex items-start gap-2">
            {el.icon}
            <div>
              <Typography variant="h6" className="text-primary font-bold">
                {el.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-primary"
                as="span"
              >
                Nivel 1
              </Typography>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-4 md:flex-row">
            <Progress value={50} />
            <Button variant="secondary" size="sm" className="w-full">
              Continuar lección
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
};

export default ModulesList;