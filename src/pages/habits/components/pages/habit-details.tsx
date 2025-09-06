import { useGetHabits } from '@/features/habits/hooks/use-get-habits';
import { useNavigate, useParams } from '@tanstack/react-router';
import { ITEMS } from '../../constants/habits-categories';
import { Button, Checkbox, Progress, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import { Calendar, Clock, Trophy } from 'lucide-react';
import { useRenderStore } from '@/shared/store/render-store';
import { useEffect, useState } from 'react';
import { useCompleteHabit } from '@/features/habits/hooks/use-complete.habit';

function HabitDetails() {
  const params = useParams({
    from: '/home/habits/detail/$id',
  });
  const { data: habits } = useGetHabits();
  const setBreadcrumbs = useRenderStore(state => state.setBreadcrumbs);
  const navigate = useNavigate();
  const { mutate: completeHabit } = useCompleteHabit();
  const { refetch: refetchHabits } = useGetHabits();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const data = habits.find((h) => h.id === params.id);
  const cardData = ITEMS.find((i) => i.key === data?.habit.name);

  useEffect(() => {
    setBreadcrumbs([
      { text: 'Inicio', href: '/home' },
      { text: 'Constructor de hábitos', href: '/home/habits' },
      { text: 'Detalle del hábito' },
    ])

    return () => setBreadcrumbs(null);
  }, [])

  // Checklist items array
  const checklist = [
    { key: 'apagar-notificaciones', label: 'Apagar notificaciones' },
    { key: 'preparar-ropa', label: 'Preparar ropa y mochila' },
    { key: 'leer-10-min', label: 'Leer 10 min' },
  ];

  // Handler for checking/unchecking items
  const handleCheck = (key: string) => {
    setCheckedItems(prev =>
      prev.includes(key)
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const handleCompleteHabit = () => {
    if (!data) return;
    completeHabit(data.id, {
      onSuccess: () => {
        refetchHabits();


        navigate({
          to: "/home/habits"
        });
      }
    });
  }
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <ModuleTitle text={cardData?.title || ""} />
          <Typography variant="h6" className="text-foreground-secondary">
            {data?.habit.description}
          </Typography>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <img
            src={cardData?.image}
            alt={cardData?.title}
            width={80}
            height={80}
          />
          <Typography className='font-bold'>Nivel {data?.currentLevel}</Typography>
        </div>
      </div>
      <Spacer size="lg" />
      <Card>
        <div className="mb-2 flex justify-between">
          <Typography>Progreso</Typography>
          <Typography>{checkedItems.length}/{checklist.length}</Typography>
        </div>
        <Progress value={checkedItems.length * 100 / checklist.length} className="bg-green-400" />
      </Card>{' '}
      <Spacer size="lg" />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Card className='flex flex-col items-center'>
          <Clock className='text-blue-500' />
          <Typography variant='body2' className="text-foreground-secondary my-2">Duración</Typography>
          <Typography className="font-semibold mb-2">30 min</Typography>
        </Card>
        <Card className='flex flex-col items-center'>
          <Calendar className='text-purple-500' />
          <Typography variant='body2' className="text-foreground-secondary my-2">Frecuencia</Typography>
          <Typography className="font-semibold mb-2">L - V</Typography>
        </Card>
        <Card className='flex flex-col items-center'>
          <Trophy className='text-yellow-500' />
          <Typography variant='body2' className="text-foreground-secondary my-2">Recompensa</Typography>
          <Typography className="font-semibold mb-2">+25 XP</Typography>
        </Card>
      </div>
      <Spacer size="lg" />
      <Card>
        <Typography variant='h5' className='font-semibold mb-2'>Checklist</Typography>
        {checklist.map((item, idx) => (
          <div className={`flex items-center gap-4${idx > 0 ? ' mt-4' : ''}`} key={item.key}>
            <Checkbox
              checked={checkedItems.includes(item.key)}
              onChange={() => handleCheck(item.key)}
            />
            <div className='flex items-center gap-2'>
              <Typography className={checkedItems.includes(item.key) ? 'line-through text-gray-400' : ''}>
                {item.label}
              </Typography>
            </div>
          </div>
        ))}
      </Card>
      <Button onClick={handleCompleteHabit} className='w-full mt-8' disabled={checkedItems.length !== checklist.length}>
        Completar hábito {checkedItems.length}/{checklist.length}
      </Button>
    </div>
  );
}

export default HabitDetails;
