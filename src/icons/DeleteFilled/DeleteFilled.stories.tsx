import type { Meta, StoryObj } from '@storybook/react';
import DeleteFilled from './DeleteFilled';

const meta: Meta<typeof DeleteFilled> = {
  component: DeleteFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeleteFilled>;

export const Icon: Story = {
  render: () => {
    return <DeleteFilled size="20px" />;
  },
};
