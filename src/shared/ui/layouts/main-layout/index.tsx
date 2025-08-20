import Sidebar from '../../organisms/sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import { DEFAULT_MENU_ITEMS, NO_LOGGED_DEFAULT_MENU_ITEMS } from './menu-items';
import { useAuthStore } from '@/features/auth/auth-store';
import { Outlet } from '@tanstack/react-router';
// import { useDummyStore } from '@/shared/store/dummy-store';

function HomeLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useResize();
  // const role = useDummyStore((state) => state.role);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile, setOpenedSidebar]);

  // if (!isAuthenticated || role === 'teacher')
  //   return <Navigate to="/login" replace />;

  return (
    <div className="text-primary">
      <Sidebar
        items={
          !isAuthenticated ? NO_LOGGED_DEFAULT_MENU_ITEMS : DEFAULT_MENU_ITEMS
        }
      />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className="mx-auto w-full p-4 lg:w-[1050px]">
          {/* <HeaderActions /> */}
          <div className="mt-4 grid grid-cols-1 gap-8">
            <Outlet />
          </div>
        </main>
      </div>
      <TimerFloating />
    </div>
  );
}

export default HomeLayout;
