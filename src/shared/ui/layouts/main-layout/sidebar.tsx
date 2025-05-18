import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../../atoms/Typography';
import { MENU_ITEMS } from './menu-items';
import { useResize } from '@/shared/hooks/use-resize';
import { useRenderStore } from '@/shared/store/render-store';
import { MenuIcon } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const { isMobile } = useResize();
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  const openedSidebar = useRenderStore((state) => state.openedSidebar);
  const sidebarItemIsSelected = (path: string, include?: string[]) => {
    return (
      location.pathname === path ||
      !!include?.some((el) => location.pathname.includes(el))
    );
  };

  return (
    <aside
      className={`from-primary to-primary-dark shadow-secondary-dark fixed z-[9999] grid h-screen min-w-[300px] grid-rows-[120px_auto] gap-2 rounded-r-2xl bg-gradient-to-br px-4 py-8 text-white shadow-xl ${isMobile ? 'translate-x-[-1000px]' : ''} ${openedSidebar ? '!translate-x-0' : ''} transition-transform duration-300`}
    >
      <div>
        <div className="flex justify-end xl:hidden">
          <MenuIcon onClick={toggleOpenedSidebar} />
        </div>
        <img
          alt="Capo logo"
          src="/src/assets/capo-logo.png"
          width={70}
          className="mx-auto mt-0 xl:mt-4"
        />
      </div>
      <div>
        {MENU_ITEMS.map((el) => (
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
