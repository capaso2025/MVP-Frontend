import { useRenderStore } from '@/shared/store/render-store';
import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import Spacer from '@/shared/ui/atoms/Spacer';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { Edit, Goal } from 'lucide-react';
import CreateGoalsForm from './create-goals-form';
import Tip from '@/shared/ui/organisms/tip';
import Actions from '@/shared/ui/organisms/actions';
import { useMemo } from 'react';
import { MODULE_TITLES } from '@/shared/constants/module-titles';

function GoalsLayout() {
  const navigate = useNavigate();
  const setModalData = useRenderStore((state) => state.setModalData);
  const breadcrumbs = useRenderStore((state) => state.breadcrumbs);
  const ITEMS = useMemo(
    () => [
      {
        icon: Goal,
        text: 'Inicio',
        onClick: () => navigate({ to: '/home/goals' }),
        route: '/home/goals',
      },
      {
        icon: Edit,
        text: 'Crear nueva meta',
        onClick: () =>
          setModalData({
            containerClassName: 'bg-white',
            title: 'Crear nueva meta',
            children: <CreateGoalsForm />,
          }),
      },
    ],
    [],
  );

  return (
    <div className="h-screen flex flex-col">
      <ModuleTitle text={MODULE_TITLES.GOALS} />
      <Spacer size="md" />
      <Breadcrumbs
        links={
          breadcrumbs || [
            { text: 'Inicio', href: '/home' },
            { text: MODULE_TITLES.GOALS, href: '/goals' },
          ]
        }
      />
      <Spacer size="lg" />
      <div className="flex flex-1 min-h-0 gap-8 md:flex-row flex-col">
        <div className="flex flex-col gap-8 md:w-1/4 w-full md:min-w-[250px]">
          <Actions items={ITEMS} />
          <Tip />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default GoalsLayout;
