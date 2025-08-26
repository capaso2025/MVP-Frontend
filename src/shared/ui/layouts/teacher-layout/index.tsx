import Sidebar from '../../organisms/sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import { TEACHER_DEFAULT_MENU_ITEMS } from '../main-layout/menu-items';
import { Outlet } from '@tanstack/react-router';

function TeacherLayout() {
  const { isMobile } = useResize();
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile, setOpenedSidebar]);

  return (
    <div className="">
      <Sidebar items={TEACHER_DEFAULT_MENU_ITEMS} />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className="mx-auto w-full p-4 lg:w-[1050px]">
          <div className="mt-4 grid grid-cols-1 gap-8 xl:-mt-4">
            <Outlet />
          </div>
        </main>
      </div>
      <TimerFloating />
    </div>
  );
}

export default TeacherLayout;
