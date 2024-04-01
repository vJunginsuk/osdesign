import type { Meta, StoryObj } from '@storybook/react';
import NotifyFilled from './NotifyFilled';

const meta: Meta<typeof NotifyFilled> = {
  component: NotifyFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotifyFilled>;

export const Icon: Story = {
  render: () => {
    return <NotifyFilled size="20px" />;
  },
};
