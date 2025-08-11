import type { Meta, StoryObj } from '@storybook/react-vite';
import UpdateTeacherEmail from './index';
import TeacherSignupFormWrapper from '../auth/teacher-signup/TeacherSignupFormWrapper';

const meta: Meta<typeof UpdateTeacherEmail> = {
  title: 'Shared/Ui/Templates/Auth/UpdateTeacherEmail',
  component: UpdateTeacherEmail,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-landing-dark flex min-h-screen items-center justify-center">
        <TeacherSignupFormWrapper
          component={<Story />}
          title={'loremetmetet'}
        />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UpdateTeacherEmail>;
export const Default: Story = {};
