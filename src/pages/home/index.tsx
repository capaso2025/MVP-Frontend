import { Button, Progress, Typography } from '@/shared/ui';
import CustomCalendar from '../sections/components/atoms/Calendar';
import DailyTasks from '../sections/components/organisms/DailyTasks';
import {
  ChartGanttIcon,
  CompassIcon,
  HeartHandshakeIcon,
  UserIcon,
} from '@/shared/ui/atoms/Icon/Icon';
import { Link } from 'react-router-dom';
const MODULES = [
  {
    title: 'Enfocar tu atención',
  },
  {
    title: 'Planificar sin caos',
  },
  {
    title: 'Establecer metas claras',
  },
  {
    title: 'Domina tu tiempo',
  },
];

const TOOLS = [
  {
    title: 'Metas  y seguimientos',
    description: (
      <>
        <Typography variant="body2" className="text-secondary" as="span">
          Objetivo actual:
        </Typography>
        <Typography variant="body2" className="text-secondary" as="span">
          Terminar proyecto personal
        </Typography>
      </>
    ),
    icon: <CompassIcon className="text-white" />,
    route: '/goals',
  },
  {
    title: 'Constructor de hábitos',
    icon: <HeartHandshakeIcon className="text-white" />,
    description: (
      <>
        <Typography variant="body2" className="text-secondary" as="span">
          Dormir antes de las 11pm
        </Typography>
        <Typography variant="body2" className="text-secondary" as="span">
          Leer 20 min diarios
        </Typography>
      </>
    ),
    route: '/habits',
  },
  {
    title: 'Aprendizaje y reflexión',
    description: (
      <>
        <Typography variant="body2" className="text-secondary" as="span">
          Dormir 8 horas
        </Typography>
        <Typography variant="body2" className="text-secondary" as="span">
          Leer 20 min diarios
        </Typography>
      </>
    ),
    icon: <ChartGanttIcon className="text-white" />,
    route: '/insights',
  },
  {
    title: 'Motivación',
    description: (
      <>
        <Typography variant="body2" className="text-secondary" as="span">
          🌝 Check-in emocional diario
        </Typography>
      </>
    ),
    icon: <UserIcon className="text-white" />,
    route: '/motivation',
  },
];
export default function Home() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-[250px_auto] gap-8">
        <div className="grid place-content-center gap-2">
          <Typography variant="h4" className="text-primary text-left font-bold">
            Hola, Matias
          </Typography>
          <img
            src="/assets/characters/capo-example.png"
            alt="Capaso"
            width={250}
            height={250}
          />
          <small className="text-center">Nivel 3 - Progreso personal</small>
        </div>
        <div>
          <Typography variant="h6" className="text-primary mb-4 font-bold">
            Tus módulos recomendados - Camino Autodidacta Caótico
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            {MODULES.map((el) => (
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <img src="" alt="" width={20} height={20} />
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
                <div className="mt-2 flex gap-2">
                  <Progress value={50} />
                  <Button variant="secondary" size="sm" className="w-full">
                    Continuar lección
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Typography className="text-primary mb-4" variant="h3">
          Capo Herramientas
        </Typography>
        <div className="grid grid-cols-[60%_auto] gap-8">
          <div className="grid h-max grid-cols-2 gap-4">
            {TOOLS.map((el) => (
              <Link
                to={el.route}
                className="bg-landing-dark hover:bg-landing-dark/80 rounded-lg p-4"
              >
                <div className="grid grid-cols-[max-content_auto] gap-2">
                  {el.icon}
                  <div className="flex flex-col gap-1">
                    <Typography variant="h6" className="font-bold text-white">
                      {el.title}
                    </Typography>
                    {el.description}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Progress value={50} />
                  <Typography>70%</Typography>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid gap-4">
            <CustomCalendar />
            <img
              src="/assets/characters/capo-pc.png"
              alt="capo"
              width={200}
              height={200}
              className="w-full rounded-2xl"
            />
            <DailyTasks />
          </div>
        </div>
      </div>
    </div>
  );
}
