import { Typography } from '@/shared/ui';
import SectionCard from './components/SectionCard';
import CustomCalendar from '@/pages/learn/components/Calendar';
import DailyTasks from './components/DailyTasks';
import CreateProfile from './components/CreateProfile';
import { CARDS_SECTIONS } from './dummy';

function Learn() {
  return (
    <div className="grid grid-cols-[60%_auto] gap-8">
      <div className="grid grid-rows-[70px_auto] gap-2">
        <Typography variant="h2" className="py-2">
          Habilidades Blandas
        </Typography>
        <div className="flex flex-col gap-8">
          {CARDS_SECTIONS.map((values) => (
            <SectionCard {...values} />
          ))}
        </div>
      </div>
      <div className="sticky top-0 mt-4 flex h-screen flex-col gap-8">
        <CustomCalendar
          selectedDays={[
            new Date('2025-05-20'),
            new Date('2025-05-21'),
            new Date('2025-05-22'),
            new Date('2025-05-23'),
          ]}
        />
        <DailyTasks />
        <CreateProfile />
      </div>
    </div>
  );
}

export default Learn;
