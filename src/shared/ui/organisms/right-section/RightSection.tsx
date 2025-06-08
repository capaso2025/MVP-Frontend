import CustomCalendar from '@/pages/sections/components/atoms/Calendar';
import CreateProfile from '@/pages/sections/components/organisms/CreateProfile';
import DailyTasks from '@/pages/sections/components/organisms/DailyTasks';

function RightSection() {
  return (
    <section className="sticky top-0 mt-12 hidden h-screen flex-col gap-8 md:flex">
      <CustomCalendar
        selectedDays={[
          new Date('2025-06-20'),
          new Date('2025-06-21'),
          new Date('2025-06-22'),
          new Date('2025-06-23'),
        ]}
      />
      <DailyTasks />
      <CreateProfile />
    </section>
  );
}

export default RightSection;
