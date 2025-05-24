import { Outlet, useSearchParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { TimerFloating } from '@/pages/timer/components/TimerFloating';
import HeaderActions from '@/pages/sections/components/organisms/HeaderActions';
import CustomCalendar from '@/pages/sections/components/atoms/Calendar';
import DailyTasks from '@/pages/sections/components/organisms/DailyTasks';
import CreateProfile from '@/pages/sections/components/organisms/CreateProfile';
import { useResize } from '@/shared/hooks/use-resize';
import { useEffect } from 'react';
import { useRenderStore } from '@/shared/store/render-store';
import School from '@/assets/school.png';
import { MenuIcon } from 'lucide-react';
function MenuLayout() {
  const { isMobile } = useResize();
  const [searchParams] = useSearchParams();
  const isTeacher = searchParams.get("role") === "teacher";
  const setOpenedSidebar = useRenderStore((state) => state.setOpenedSidebar);
  useEffect(() => {
    if (isMobile) {
      setOpenedSidebar(false);
    }
  }, [isMobile]);
  return (
    <div className="">
      <Sidebar />
      {isMobile ? <></> : <div className="w-[300px]" />}
      <div className={isMobile ? 'w-auto' : 'ml-[300px]'}>
        <main className={`mx-auto  ${!isTeacher ? "p-4 w-[1050px]" : "w-full"}`}>
          {!isTeacher ? <HeaderActions /> : <TeacherHeader />}
          <div className={`grid grid-cols-1 gap-8 ${!isTeacher ? "md:grid-cols-[60%_auto]" : ""}`}>
            <Outlet />
            {!isTeacher && <section className="sticky top-0 mt-4 hidden h-screen flex-col gap-8 md:flex">
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
            </section>}
          </div>
        </main>
      </div>
      <TimerFloating />
    </div>
  );
}

export default MenuLayout;

const TeacherHeader = () => {
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  return <header className="bg-white p-2 shadow-sm">
    <div className="flex items-center gap-2">
      <MenuIcon
        className="block xl:hidden"
        color="var(--color-primary)"
        onClick={toggleOpenedSidebar}
      />
      <img
        src={School}
        alt="Logo colegio"
        width={50}
        height={50}
        className="object-contain"
      />
      <h1 className="text-blue-900 font-bold text-lg">COLEGIO ***</h1>
    </div>
  </header>
}