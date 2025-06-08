import type { Meta, StoryObj } from '@storybook/react-vite';
import AlertDialog from './index';
import { useRenderStore } from '@/shared/store/render-store';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof AlertDialog> = {
  title: 'Shared/Ui/Molecules/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const setAlertDialogData = useRenderStore(
        (state) => state.setAlertDialogData,
      );

      return (
        <div className="bg-primary border-custom relative mx-auto min-h-[200px] w-[90%] max-w-[800px] overflow-auto rounded-2xl p-4 md:min-w-[400px]">
          <Button
            variant="landing"
            onClick={() => {
              setAlertDialogData({
                show: true,
                title: 'Alerta de ejemplo',
                description:
                  'Esta es una descripción de alerta para mostrar información importante.',
                confirmText: 'Aceptar',
                onConfirm: async () => {
                  console.log('Acción confirmada');
                },
              });
            }}
          >
            open alert dialog
          </Button>
          <Story />
        </div>
      );
    },
  ],
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;
export const Default: Story = {};
