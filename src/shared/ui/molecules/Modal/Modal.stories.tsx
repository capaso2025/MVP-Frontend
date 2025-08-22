import type { Meta, StoryObj } from '@storybook/react-vite';
import Modal from './index';
import { useRenderStore } from '@/shared/store/render-store';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Ui/Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      const setModalData = useRenderStore((state) => state.setModalData);
      setModalData({
        children: <p>content</p>,
      });
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  args: {},
};
