import { Flame, Trophy } from 'lucide-react';
import CustomCalendar from '../sections/components/atoms/Calendar';
import { Typography } from '@/shared/ui';

function Calendar() {
  return (
    <div>
      <Typography variant="h3" className="mb-8">
        Calendario de actividades
      </Typography>
      <div className="grid grid-cols-[70%_auto] gap-8">
        <CustomCalendar
          selectedDays={[new Date('2025-06-20'), new Date('2025-06-9')]}
        />
        <div className="grid grid-rows-[45%_20%_auto] place-content-center justify-center rounded-lg">
          <Flame color="orange" size={150} className="" />
          <Typography
            variant="h1"
            className="text-center"
            style={{
              fontSize: '80px',
            }}
          >
            5
          </Typography>
          <Typography variant="h4" className="mt-2 font-normal">
            días de racha
          </Typography>
        </div>
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 rounded-lg">
        <Typography variant="h4">Compite con tus amigos! </Typography>
        <div className="">
          {[
            {
              id: 1,
              name: 'Usuario 1',
              points: 100,
            },
            {
              id: 2,
              name: 'Usuario 2',
              points: 80,
            },
            {
              id: 3,
              name: 'Usuario 3',
              points: 60,
            },
          ].map(({ id, name, points }) => (
            <div
              key={id}
              className="mt-4 flex items-center gap-4 rounded-lg bg-gray-100 p-4"
            >
              <Trophy
                color={id === 1 ? 'gold' : id === 2 ? 'silver' : 'brown'}
                size={40}
              />
              <Typography variant="body1">{name}</Typography>
              <Typography variant="body1" className="ml-auto">
                {points} puntos
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
