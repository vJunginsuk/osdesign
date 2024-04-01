import type { Meta, StoryObj } from '@storybook/react';
import UserFilled from './UserFilled';

const meta: Meta<typeof UserFilled> = {
  component: UserFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserFilled>;

export const Icon: Story = {
  render: () => {
    return <UserFilled size="20px" />;
  },
};
