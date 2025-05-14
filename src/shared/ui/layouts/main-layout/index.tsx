import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import HeaderActions from '@/pages/sections/components/organisms/HeaderActions';
import CustomCalendar from '@/pages/sections/components/atoms/Calendar';
import DailyTasks from '@/pages/sections/components/organisms/DailyTasks';
import CreateProfile from '@/pages/sections/components/organisms/CreateProfile';

function MenuLayout() {
  return (
    <div className="grid h-screen grid-cols-[100px_auto] lg:grid-cols-[300px_auto]">
      <Sidebar />
      <div className='w-[300px]' />
      <main className="mx-auto w-full p-4 lg:w-[1050px]">
        <header className="flex justify-end">
          <HeaderActions />
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[60%_auto]">
          <Outlet />
          <section className="sticky top-0 mt-4 flex h-screen flex-col gap-8">
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
          </section>
        </div>
      </main>
      <TimerFloating />
    </div>
  );
}

export default MenuLayout;
