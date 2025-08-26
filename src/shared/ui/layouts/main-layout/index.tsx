import Sidebar from '../../organisms/sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect, useState } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import { DEFAULT_MENU_ITEMS } from './menu-items';
import { Outlet } from '@tanstack/react-router';
import { Typography } from '../../atoms/Typography';
import Avatar from '../../atoms/Avatar';
import RightSection from '../../organisms/right-section';
import { useGetInfo } from '@/features/auth/info/hooks/use-get-info';

function HomeLayout() {
  const { isMobile } = useResize();
  const { data: userInfo } = useGetInfo();
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  const [showRightSection, setShowRightSection] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile, setOpenedSidebar]);

  return (
    <div className="text-primary relative">
      <Sidebar
        items={
          DEFAULT_MENU_ITEMS
        }
      />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className="relative mx-auto w-full p-4 lg:w-[1050px]">
          <div className="absolute right-4">
            <div
              className="flex cursor-pointer items-center gap-4"
              onClick={() => setShowRightSection(true)}
            >
              <Typography className='hidden md:block'>{userInfo?.firstName} {userInfo?.lastName}</Typography>
              <Avatar src="/assets/characters/capito-excited.png" />
            </div>
          </div>
          <div className="mt-4">
            <Outlet />
          </div>
        </main>
      </div>
      <TimerFloating />
      <RightSection
        open={showRightSection}
        onClose={() => setShowRightSection(false)}
      />
    </div>
  );
}

export default HomeLayout;
