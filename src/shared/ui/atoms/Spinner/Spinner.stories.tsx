import type { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta = {
  title: "UI/Atoms/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};
