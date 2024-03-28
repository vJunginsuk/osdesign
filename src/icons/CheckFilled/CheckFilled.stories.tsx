import type { Meta, StoryObj } from '@storybook/react';
import CheckFilled from './CheckFilled';

const meta: Meta<typeof CheckFilled> = {
  component: CheckFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckFilled>;

export const Icon: Story = {
  render: () => {
    return <CheckFilled size="20px" />;
  },
};
