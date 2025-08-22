import { Button, Progress, Typography } from '@/shared/ui';
import Badge from '@/shared/ui/atoms/Badge';
import { Card } from '@/shared/ui/atoms/Card';
import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import Spacer from '@/shared/ui/atoms/Spacer';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import { Check, CheckCircle, CircleMinus, Clock, Goal, TrendingUp } from 'lucide-react';

function Objetives() {
  const CARDS = [
    {
      color: 'text-green-400',
      backgroundBadgeColor: 'bg-green-200',
      time: 'Esta semana',
      period: 'Corto plazo',
      title: 'Hacer ejercicios 5 veces esta semana',
      value: 75,
      content: () => <DaysList />,
    },
    {
      color: 'text-blue-400',
      backgroundBadgeColor: 'bg-blue-200',
      time: '30 días restantes',
      period: 'Mediano plazo',
      title: 'Ahorrar 100$ en 1 mes',
      value: 75,
      content: () => <MediumContent />,
    },
    {
      color: 'text-purple-400',
      backgroundBadgeColor: 'bg-purple-200',
      time: '2 meses restantes',
      period: 'Largo plazo',
      title: 'Leer 3 libros en 3 meses',
      value: 75,
      content: () => <LargeContent />,
    },
  ];
  return (
    <div>
      <ModuleTitle text="Objetivos" />
      <Spacer size="md" />
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Metas y seguimientos', href: '/home/goals' },
          { text: 'Objetivos', href: '/goals/objetives' },
        ]}
      />
      <Spacer size="2xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CARDS.map((el) => (
          <Card className="grid !h-[400px] grid-rows-[auto_max-content]">
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <Goal size={20} className={el.color} />
                  <Badge
                    text={el.period}
                    className={`${el.backgroundBadgeColor} ${el.color}`}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={10} />
                  <Typography className="!text-xs text-gray-600">
                    {el.time}
                  </Typography>
                </div>
              </div>
              <Spacer size="md" />
              <Typography className="line-clamp-2 h-12 font-semibold text-ellipsis">
                {el.title}
              </Typography>
              <Spacer size="lg" />
              <div>
                <div className="mb-1 flex justify-between">
                  <Typography variant="body2" className="text-gray-600">
                    Progreso
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {el.value}%
                  </Typography>
                </div>
                <Progress value={el.value} className="bg-primary" />
              </div>
              <Spacer size="md" />
              {el.content()}
            </div>
            <Button
              variant="ghost"
              className="w-full border border-gray-200"
              size="sm"
            >
              <TrendingUp size={20} className="mr-1" /> Actualizar progreso
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Objetives;

function DaysList() {
  return (
    <div>
      <Typography variant="body2" className="text-gray-600">
        Esta semana
      </Typography>
      <Spacer size="sm" />
      <div className="flex flex-wrap justify-around">
        {Array.from({ length: 7 }).map((_, index) => (
          <div>
            <div
              key={index}
              className="grid h-[30px] w-[30px] place-content-center rounded-full bg-green-400"
            >
              <Check className="text-white" />
            </div>
            <Typography className="!text-xs text-gray-600">
              Día {index + 1}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

function MediumContent() {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <Typography variant="body2" className="text-gray-600">
          Ahorrado
        </Typography>
        <Typography variant="body2" className='font-bold'>
          $75 / $100
        </Typography>
      </div>
      <Badge text='Plan sugerido: ahorrar $3.30 diario' className='text-blue-600 bg-blue-200' />
    </div>
  );
}

function LargeContent() {
  return <div>
    {
      [{
        title: 'Libro 1',
        week: 4,
        completed: true
      },
      {
        title: 'Libro 2',
        week: 8,
        completed: false
      },
      {
        title: 'Libro 3',
        week: 12,
        completed: false
      }].map(el => <div className='flex justify-between items-center'>
        <Typography variant='body1' className='mt-2'>
          {el.title}
        </Typography>
        <Typography className='flex items-center gap-1 text-gray-600' variant='body2'>
          Semana {el.week} {el.completed ? <CheckCircle size={14} className='text-green-400' /> : <CircleMinus size={14} className='text-gray-400' />}
        </Typography>
      </div>)
    }

  </div>
}