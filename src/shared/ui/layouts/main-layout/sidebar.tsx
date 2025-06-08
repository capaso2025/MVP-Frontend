import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Typography } from '../../atoms/Typography';
import { useResize } from '@/shared/hooks/use-resize';
import { useRenderStore } from '@/shared/store/render-store';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';
import capoLogo from '@/assets/capo-logo.png';
import { useAuthStore } from '@/features/auth/auth-store';
import {
  DEFAULT_MENU_ITEMS,
  NO_LOGGED_DEFAULT_MENU_ITEMS,
  TEACHER_DEFAULT_MENU_ITEMS,
} from './menu-items';

function Sidebar() {
  const location = useLocation();
  const { isMobile } = useResize();
  const [searchParams] = useSearchParams();
  const isTeacher = searchParams.get('role') === 'teacher';
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  const openedSidebar = useRenderStore((state) => state.openedSidebar);

  const sidebarItemIsSelected = (path: string, include?: string[]) => {
    const pathWithoutQuery = path.split('?')[0];
    return (
      location.pathname === pathWithoutQuery ||
      !!include?.some((el) => location.pathname.includes(el))
    );
  };

  return (
    <aside
      className={`bg-landing-dark shadow-secondary-dark fixed z-[90] grid h-screen min-w-[300px] grid-rows-[120px_auto] gap-2 rounded-r-2xl bg-gradient-to-br px-4 py-8 text-white shadow-xl ${isMobile ? 'translate-x-[-1000px]' : ''} ${openedSidebar ? '!translate-x-0' : ''} transition-transform duration-300`}
    >
      <div>
        <div className="flex justify-end xl:hidden">
          <MenuIcon onClick={toggleOpenedSidebar} />
        </div>
        <img
          alt="Capo logo"
          src={capoLogo}
          width={70}
          className="mx-auto mt-0 xl:mt-4"
        />
      </div>
      <div>
        {(isTeacher
          ? TEACHER_DEFAULT_MENU_ITEMS
          : isAuthenticated
            ? DEFAULT_MENU_ITEMS
            : NO_LOGGED_DEFAULT_MENU_ITEMS
        ).map((el) => (
          <MenuItem
            key={el.label}
            {...el}
            isSelected={sidebarItemIsSelected(el.path, el.include)}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

const MenuItem = (props: {
  label: string;
  icon: string;
  path: string;
  isSelected: boolean;
}) => {
  const { label, icon, path, isSelected } = props;
  return (
    <Link
      to={path}
      className={`mb-2 flex w-full items-center gap-2 rounded-lg border-2 border-transparent p-4 transition-all duration-200 ${isSelected ? '!border-primary-lighter border-[1px]' : ''}`}
    >
      <img src={icon} width={30} />
      <Typography className="font-bold text-white">{label}</Typography>
    </Link>
  );
};
