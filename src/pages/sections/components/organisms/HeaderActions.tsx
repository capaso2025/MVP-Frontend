import { useRenderStore } from '@/shared/store/render-store';
import { Typography } from '@/shared/ui';
import Popover from '@/shared/ui/molecules/Popover';
import { MenuIcon } from 'lucide-react';
import brain from '@/assets/brain.png';
import fire from '@/assets/fire.png';
import world from '@/assets/world.png';
import heart from '@/assets/heart.png';

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
          trigger={() => <img src={brain} width={25} />}
          optionsList={[
            {
              label: 'Gestión de Tiempo',
              icon: brain,
              onClick: () => { },
            },
            {
              label: 'Control de Emociones',
              icon: brain,
              onClick: () => { },
            },
          ]}
        />
        <Popover
          triggerClassName="pb-2"
          trigger={() => <img src={fire} width={25} />}
          optionsList={[
            {
              label: 'Gestión de Tiempo',
              icon: brain,
              onClick: () => { },
            },
            {
              label: 'Control de Emociones',
              icon: brain,
              onClick: () => { },
            },
          ]}
        />
        <Popover
          triggerClassName="pb-2"
          trigger={() => <img src={world} width={22} />}
          optionsList={[
            {
              label: 'Inglés',
              onClick: () => { },
            },
          ]}
        />
        <div className="mb-2 ml-4 flex items-center gap-2">
          <img src={heart} width={25} />
          <Typography className="font-bold text-red-600">5</Typography>
        </div>
      </div>
    </header>
  );
}

export default HeaderActions;
