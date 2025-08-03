import { useRenderStore } from '@/shared/store/render-store';
import Popover from '@/shared/ui/molecules/Popover';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';
import { LogOut, Menu } from 'lucide-react';

function HeaderActions() {
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  return <div />;
  return (
    <header className="flex justify-between">
      <MenuIcon
        className="text-primary block xl:hidden"
        onClick={toggleOpenedSidebar}
      />
      <div className="hidden xl:block" />
      <div className="flex items-center justify-between gap-6">
        <Popover
          triggerClassName="pb-2"
          trigger={() => <Menu size={30} />}
          optionsList={[
            {
              label: 'Cerrar sesión',
              icon: <LogOut />,
              onClick: () => {},
            },
          ]}
        />
      </div>
    </header>
  );
}

export default HeaderActions;
