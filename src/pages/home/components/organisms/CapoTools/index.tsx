import { Progress, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import { Link } from '@tanstack/react-router';
import {
  ChartGanttIcon,
  CompassIcon,
  HeartHandshakeIcon,
  UserIcon,
} from 'lucide-react';
const TOOLS = [
  {
    title: 'Metas  y seguimientos',
    description: 'Fija tus objetivos y revisa tu avance día a día.',
    icon: <CompassIcon className="text-purple-400" />,
    route: '/home/goals',
    color: 'bg-purple-400',
  },
  {
    title: 'Constructor de hábitos',
    icon: <HeartHandshakeIcon className="text-green-400" />,
    description: 'Crea rutinas simples y conviértelas en hábitos duraderos.',
    route: '/home/habits',
    color: 'bg-green-400',
  },
  {
    title: 'Aprendizaje y reflexión',
    description: 'Recibe reportes claros y consejos para mejorar.',
    icon: <ChartGanttIcon className="text-blue-400" />,
    route: '/home/learning',
    color: 'bg-blue-400',
  },
  {
    title: 'Motivación',
    description: 'Encuentra retos y recompensas que te mantienen enfocado.',
    icon: <UserIcon className="text-red-400" />,
    color: 'bg-red-400',
    route: '/home/motivation',
  },
];
function CapoTools() {
  const randomGenerator = () => Math.floor(Math.random() * 100);

  return (
    <div>
      <ModuleTitle text="Capo Herramientas" />
      <div className="mt-12 grid h-max grid-cols-1 gap-4 sm:grid-cols-2">
        {TOOLS.map((el) => {
          const randomValue = randomGenerator();
          return (
            <Link to={el.route} className="">
              <Card className="grid h-[150px] grid-rows-[auto_max-content]" withHover>
                <div className="grid grid-cols-[max-content_auto] gap-2">
                  {el.icon}
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" className="font-bold">
                      {el.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600"
                      as="span"
                    >
                      {el.description}
                    </Typography>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Progress value={randomValue} className={el.color} />
                  <Typography>{randomValue}%</Typography>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CapoTools;
