import { useCancelGoal } from '@/features/goals/hooks/use-cancel-goal';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import { Goal } from '@/features/goals/models/goal';
import { useRenderStore } from '@/shared/store/render-store';
import { Progress, Typography } from '@/shared/ui';
import Badge from '@/shared/ui/atoms/Badge';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
import DropdownMenu from '@/shared/ui/organisms/dropdown';
import { ChevronRight, EllipsisVertical, GoalIcon } from 'lucide-react';
import { useState } from 'react';
import Objetives from '../objetives';
import { CATEGORIES_CONFIG } from '@/shared/constants/categories';

function GoalPreview(props: { data: Goal | undefined }) {
  const { data } = props;
  const { refetch } = useGetGoals({ enabled: false });
  const { mutate: executeCancel } = useCancelGoal();
  const [showObjetives, setShowObjectives] = useState(false);
  const setAlertDialogData = useRenderStore(
    (state) => state.setAlertDialogData,
  );

  const handleCancel = () => {
    setAlertDialogData({
      show: true,
      title: '¿Estás seguro de que deseas cancelar esta meta?',
      description: 'Esta acción no se puede deshacer.',
      onConfirm: async () => {
        await executeCancel({
          id: data?.id!,
        });
        refetch();
      },
      confirmText: 'Sí, cancelar',
    });
  };


  if (!data) return <></>;

  const badge = CATEGORIES_CONFIG[data.category as keyof typeof CATEGORIES_CONFIG];
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 rounded-full p-2 hidden md:block">
          <GoalIcon size={30} className="text-primary" />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-end gap-2">
                <Typography className="font-semibold" variant="h5">
                  {data?.title}{' '}
                </Typography>
                <Badge
                  text={badge?.label || 'Sin categoría'}
                  className={`${badge?.bgClass} ${badge?.textClass}`}
                />
              </div>
              <Typography className="text-foreground-secondary">
                {data?.description}
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <ChevronRight
                className={
                  showObjetives
                    ? 'rotate-90 transition-transform'
                    : 'transition-transform'
                }
                onClick={() => setShowObjectives(!showObjetives)}
              />
              <DropdownMenu
                trigger={<EllipsisVertical />}
                options={[
                  {
                    text: 'Editar',
                    onClick: () => console.log('editar'),
                  },
                  {
                    text: 'Cancelar meta',
                    onClick: handleCancel,
                  },
                ]}
              />
            </div>
          </div>
          <Spacer size="lg" />
          <div className='mb-6'>
            <div className="mb-2 flex justify-between">
              <Typography variant="body2">Progreso general</Typography>
              <Typography variant="body2">{0}%</Typography>
            </div>
            <Progress className='bg-gradient-to-br from-primary to-primary-light' value={data.progress} />
            <div className="my-2 flex justify-between">
              <Typography
                as="small"
                className="text-foreground-secondary"
                variant="caption"
              >
                1 de objetivos completados
              </Typography>
            </div>
          </div>
          {showObjetives && <Objetives show={showObjetives} goalId={data?.id!} />}
        </div>
      </div>
    </Card>
  );
}

export default GoalPreview;
