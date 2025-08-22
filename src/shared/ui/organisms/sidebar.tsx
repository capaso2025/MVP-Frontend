import { Typography } from '../atoms/Typography';
import { useResize } from '@/shared/hooks/use-resize';
import { useRenderStore } from '@/shared/store/render-store';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';
import capoLogo from '@/assets/capo-logo.png';
import { MenuItem as MenuItemType } from '../layouts/main-layout/menu-items';
import { Link, useLocation } from '@tanstack/react-router';
import { SparklesIcon } from 'lucide-react';

function Sidebar(props: { items: MenuItemType[] }) {
  const { items } = props;
  const location = useLocation();
  const { isMobile } = useResize();
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
      className={`bg-landing-dark shadow-secondary-dark fixed z-[90] grid h-screen min-w-[300px] grid-rows-[180px_auto] gap-2 rounded-r-2xl bg-gradient-to-br px-4 py-8 text-white shadow-xl ${isMobile ? 'translate-x-[-1000px]' : ''} ${openedSidebar ? '!translate-x-0' : ''} transition-transform duration-300`}
    >
      <div>
        <div className="flex justify-end xl:hidden">
          <MenuIcon onClick={toggleOpenedSidebar} />
        </div>
        <img
          alt="Capaso logo"
          src={capoLogo}
          width={70}
          className="mx-auto mt-0 xl:mt-4"
        />
        <div className="bg-primary-dark/50 mt-8 mb-4 flex items-center gap-2 rounded-full border border-gray-200/20 px-2 py-2">
          <SparklesIcon className="text-green-300" />
          <input
            placeholder="Consulta con Capaso IA"
            className="outline-none placeholder:text-sm"
          />
        </div>
      </div>
      <div>
        {items.map((el) => (
          <MenuItem
            key={el.label}
            {...el}
            isSelected={sidebarItemIsSelected(el.path, el.include)}
            onClick={toggleOpenedSidebar}
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
  onClick: () => void;
}) => {
  const { label, icon, path, isSelected, onClick } = props;
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`mb-2 flex w-full items-center gap-2 rounded-full border-[1px] border-transparent px-4 py-2 transition-all duration-100 ${isSelected ? '!border-primary-lighter bg-primary-light/20' : ''}`}
    >
      <img src={icon} width={30} />
      <Typography className="text-white">{label}</Typography>
    </Link>
  );
};
