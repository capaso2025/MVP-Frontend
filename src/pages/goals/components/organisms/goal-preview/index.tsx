import { useCancelGoal } from '@/features/goals/hooks/use-cancel-goal';
import { useCompleteGoal } from '@/features/goals/hooks/use-complete-goal';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import { useUpdateGoal } from '@/features/goals/hooks/use-update-goal';
import { Goal } from '@/features/goals/models/goal';
import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import Badge from '@/shared/ui/atoms/Badge';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
import DropdownMenu from '@/shared/ui/organisms/dropdown';
import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';

function GoalPreview(props: { data: Goal | undefined }) {
  const { data } = props;
  const { mutate: executeUpdate } = useUpdateGoal();
  const { mutate: executeComplete } = useCompleteGoal();
  const { refetch } = useGetGoals({ enabled: false });
  const { mutate: executeCancel } = useCancelGoal();
  const setAlertDialogData = useRenderStore(state => state.setAlertDialogData);
  const [updatedProgress, setUpdatedProgress] = useState(data?.progress || 0);

  const handleUpdate = () => {
    executeUpdate({
      id: data?.id!,
      progress: updatedProgress,
    });
  };

  const handleComplete = () => {
    executeComplete({
      id: data?.id!,
    });
  };

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
      confirmText: 'Sí, cancelar'
    });
  };

  if (!data) return <></>
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <Typography className="font-semibold" variant="h5">
            {data?.title}
          </Typography>
          <Typography as="small" className="text-gray-600" variant="body2">
            Fecha limite:{' '}
            {data?.deadline.split('T')[0]?.split('-').reverse().join('/')}
          </Typography>
        </div>

        <div className='flex items-center gap-2'>
          <Badge
            text={data?.category || ''}
            className="bg-red-200 text-red-600"
          />
          <DropdownMenu trigger={<EllipsisVertical />} options={[
            {
              text: 'Editar',
              onClick: () => console.log('editar')
            },
            {
              text: 'Cancelar meta',
              onClick: handleCancel
            }
          ]} />
        </div>
      </div>
      <Spacer size="lg" />
      <div>
        <div className="mb-2 flex justify-between">
          <Typography variant="body2">Progreso general</Typography>
          <Typography variant="body2">{updatedProgress || 0}%</Typography>
        </div>
        <input
          className="w-full"
          type="range"
          min="0"
          max="100"
          value={updatedProgress}
          onChange={(e) => setUpdatedProgress(Number(e.target.value))}
        />
      </div>
      <Spacer size="md" />
      {updatedProgress === 100 ? (
        <div className="flex justify-end">
          <Button size="sm" onClick={handleComplete}>Marcar como completado</Button>
        </div>
      ) : (
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            className="border border-gray-200"
            size="sm"
            onClick={handleUpdate}
            disabled={updatedProgress === data?.progress}
          >
            Actualizar progreso
          </Button>
          {updatedProgress !== data?.progress && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUpdatedProgress(data?.progress || 0)}
              disabled={updatedProgress === data?.progress}
            >
              Restablecer
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}

export default GoalPreview;
