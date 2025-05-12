import { Typography } from '@/shared/ui';
import SectionCard from './components/organisms/SectionCard';
import CustomCalendar from '@/pages/sections/components/atoms/Calendar';
import DailyTasks from './components/organisms/DailyTasks';
import CreateProfile from './components/organisms/CreateProfile';
import { CARDS_SECTIONS } from './dummy';

function Learn() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[60%_auto]">
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
