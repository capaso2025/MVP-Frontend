import type { Meta, StoryObj } from '@storybook/react-vite';
import TeacherSignupFormWrapper from './TeacherSignupFormWrapper';
const meta: Meta<typeof TeacherSignupFormWrapper> = {
  title: 'Shared/Ui/Templates/auth/TeacherSignupFormWrapper',
  component: TeacherSignupFormWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-landing-dark grid min-h-screen place-content-center gap-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TeacherSignupFormWrapper>;
export const Default: Story = {};
