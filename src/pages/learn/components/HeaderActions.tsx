import { Typography } from '@/shared/ui';
import Popover from '@/shared/ui/molecules/Popover/Popover';

function HeaderActions() {
  return (
    <div className="flex items-center justify-end gap-6">
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
  );
}

export default HeaderActions;
