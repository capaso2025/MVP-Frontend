import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../../organisms/sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import HeaderActions from '@/pages/sections/components/organisms/HeaderActions';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import { TEACHER_DEFAULT_MENU_ITEMS } from '../main-layout/menu-items';
import { useDummyStore } from '@/shared/store/dummy-store';
import { useAuthStore } from '@/features/auth/auth-store';

function TeacherLayout() {
  const { isMobile } = useResize();
  const role = useDummyStore((state) => state.role);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile, setOpenedSidebar]);

  if (!isAuthenticated || role !== 'teacher')
    return <Navigate to="/login" replace={true} />;
  return (
    <div className="">
      <Sidebar items={TEACHER_DEFAULT_MENU_ITEMS} />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className="mx-auto w-full p-4 lg:w-[1050px]">
          <HeaderActions />
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
