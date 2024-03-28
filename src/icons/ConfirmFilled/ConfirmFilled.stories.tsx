import type { Meta, StoryObj } from '@storybook/react';
import ConfirmFilled from './ConfirmFilled';

const meta: Meta<typeof ConfirmFilled> = {
  component: ConfirmFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmFilled>;

export const Icon: Story = {
  render: () => {
    return <ConfirmFilled size="20px" />;
  },
};
