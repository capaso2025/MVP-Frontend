import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../../atoms/Typography/Typography';
import { MENU_ITEMS } from './menu-items';

function Sidebar() {
  const location = useLocation();
  const sidebarItemIsSelected = (path: string, include?: string[]) => {
    return location.pathname === path || !!include?.some((el) => location.pathname.includes(el));
  };
  return (
    <aside className="fixed bg-gradient-to-br h-screen from-primary to-primary-dark shadow-secondary-dark grid grid-rows-[100px_auto] gap-2 rounded-r-2xl px-4 py-8 text-white shadow-xl min-w-[300px]">
      <img
        alt="Capo logo"
        src="/src/assets/capo-logo.png"
        width={70}
        className="mx-auto"
      />
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
      <Typography className="hidden font-bold text-white lg:block">
        {label}
      </Typography>
    </Link>
  );
};
