import Sidebar from '../../organisms/sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect, useState } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import { DEFAULT_MENU_ITEMS, NO_LOGGED_DEFAULT_MENU_ITEMS } from './menu-items';
import { useAuthStore } from '@/features/auth/auth-store';
import { Outlet } from '@tanstack/react-router';
import { Typography } from '../../atoms/Typography';
import Avatar from '../../atoms/Avatar';
import RightSection from '../../organisms/right-section';
// import { useDummyStore } from '@/shared/store/dummy-store';

function HomeLayout() {
  const { isMobile } = useResize();
  // const role = useDummyStore((state) => state.role);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  const [showRightSection, setShowRightSection] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile, setOpenedSidebar]);

  // if (!isAuthenticated || role === 'teacher')
  //   return <Navigate to="/login" replace />;

  return (
    <div className="text-primary relative">
      <Sidebar
        items={
          !isAuthenticated ? NO_LOGGED_DEFAULT_MENU_ITEMS : DEFAULT_MENU_ITEMS
        }
      />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className="mx-auto relative w-full p-4 lg:w-[1050px]">
          <div className='absolute right-4'>
            <div className='flex gap-4 items-center cursor-pointer'>
              <Typography>Fernando Altamirano</Typography>
              <Avatar src='/assets/characters/capito-excited.png' />
            </div>
          </div>
          <div className="mt-4">
            <Outlet />
          </div>
        </main>
      </div>
      <TimerFloating />
      {/* RightSection Drawer Overlay */}
      <RightSection open={showRightSection} onClose={() => setShowRightSection(false)} />
    </div>
  );
}

export default HomeLayout;
