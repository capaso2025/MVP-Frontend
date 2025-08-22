import ModuleTitle from '@/shared/ui/atoms/ModuleTitle';
import Spacer from '@/shared/ui/atoms/Spacer';
import Breadcrumbs from '@/shared/ui/molecules/Breadcrumbs';
import Tip from '../../shared/ui/organisms/tip';
import Categories from './components/organisms/categories';
import GoalPreview from './components/organisms/goal-preview';
import Objetives from './components/organisms/objetives';
import { Typography } from '@/shared/ui';
import Actions from '../../shared/ui/organisms/actions';
import { CheckCircle, Edit, Search } from 'lucide-react';
import { useRenderStore } from '@/shared/store/render-store';
import AddGoalsForm from './components/templates/add-goals-form';



export default function Goals() {
  const setModalData = useRenderStore(state => state.setModalData);

  const ITEMS = [
    {
      icon: Edit,
      text: 'Crear nueva meta',
      onClick: () => setModalData({
        title: 'Crear nueva meta',
        children: <AddGoalsForm />
      }),
    },
    {
      icon: Search,
      text: 'Ver mis metas activas',
    },
    {
      icon: CheckCircle,
      text: 'Metas completadas',
    },
  ];

  return (
    <div>
      <ModuleTitle text="Metas y seguimientos" />
      <Spacer size="md" />
      <Breadcrumbs
        links={[
          { text: 'Inicio', href: '/home' },
          { text: 'Metas y seguimientos', href: '/goals' },
        ]}
      />
      <Spacer size="lg" />
      <div className="grid grid-cols-1 md:grid-cols-[25%_auto] gap-8">
        <div className="flex flex-col gap-8">
          <Actions items={ITEMS} />
          <Tip />
        </div>
        <div className='grid gap-8'>
          <div>
            <Typography variant='h5' className='font-semibold mb-2'>Area de vida - META</Typography>
            <Categories />
          </div>
          <GoalPreview />
          <Objetives />
        </div>
      </div>
    </div>
  );
}
