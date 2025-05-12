import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import HeaderActions from '@/pages/sections/components/organisms/HeaderActions';

function MenuLayout() {
  return (
    <div className="grid h-screen grid-cols-[100px_auto] lg:grid-cols-[300px_auto]">
      <Sidebar />
      <main className="mx-auto w-full p-4 lg:w-[1050px]">
        <div className="flex justify-end">
          <HeaderActions />
        </div>
        <Outlet />
      </main>
      <TimerFloating />
    </div>
  );
}

export default MenuLayout;
