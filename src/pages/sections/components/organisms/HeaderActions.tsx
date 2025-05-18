import { useRenderStore } from '@/shared/store/render-store';
import { Typography } from '@/shared/ui';
import Popover from '@/shared/ui/molecules/Popover';
import { MenuIcon } from 'lucide-react';
function HeaderActions() {
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  return (
    <header className="flex justify-between">
      <MenuIcon
        className="block xl:hidden"
        color="var(--color-primary)"
        onClick={toggleOpenedSidebar}
      />
      <div className="hidden xl:block" />
      <div className="flex items-center justify-between gap-6">
        <Popover
          triggerClassName="pb-2"
          trigger={() => <img src="/src/assets/brain.png" width={25} />}
          optionsList={[
            {
              label: 'Gestión de Tiempo',
              icon: '/src/assets/brain.png',
              onClick: () => {},
            },
            {
              label: 'Control de Emociones',
              icon: '/src/assets/brain.png',
              onClick: () => {},
            },
          ]}
        />
        <Popover
          triggerClassName="pb-2"
          trigger={() => <img src="/src/assets/fire.png" width={25} />}
          optionsList={[
            {
              label: 'Gestión de Tiempo',
              icon: '/src/assets/brain.png',
              onClick: () => {},
            },
            {
              label: 'Control de Emociones',
              icon: '/src/assets/brain.png',
              onClick: () => {},
            },
          ]}
        />
        <Popover
          triggerClassName="pb-2"
          trigger={() => <img src="/src/assets/world.png" width={22} />}
          optionsList={[
            {
              label: 'Inglés',
              onClick: () => {},
            },
          ]}
        />
        <div className="mb-2 ml-4 flex items-center gap-2">
          <img src="/src/assets/heart.png" width={25} />
          <Typography className="font-bold text-red-600">5</Typography>
        </div>
      </div>
    </header>
  );
}

export default HeaderActions;
