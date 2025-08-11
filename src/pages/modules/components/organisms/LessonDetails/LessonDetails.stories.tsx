import type { Meta, StoryObj } from '@storybook/react-vite';
import LessonDetails from './LessonDetails';
import { XIcon } from '@/shared/ui/atoms/Icon/Icon';

const meta: Meta<typeof LessonDetails> = {
  title: 'Pages/Learn/Components/Organisms/LessonDetails',
  component: LessonDetails,
  tags: ['autodocs'],
  argTypes: {
    lesson: {
      control: 'object',
      defaultValue: { level: 1, title: 'Introducción a JavaScript' },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={
          'bg-primary border-custom relative mx-auto min-h-[200px] w-[90%] max-w-[800px] overflow-auto rounded-2xl p-4 md:min-w-[400px]'
        }
      >
        <div className="absolute top-[4px] left-[4px] grid h-10 w-10 cursor-pointer place-content-center rounded-2xl">
          <XIcon className="scale-110 text-white" />
        </div>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof LessonDetails>;
export const Default: Story = {
  args: {
    lesson: { level: 1, title: '¿Que es comunicar?' },
  },
  render: (args) => <LessonDetails {...args} />,
  parameters: {
    layout: 'centered',
  },
};
