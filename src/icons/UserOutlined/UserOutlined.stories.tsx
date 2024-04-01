import type { Meta, StoryObj } from '@storybook/react';
import UserOutlined from './UserOutlined';

const meta: Meta<typeof UserOutlined> = {
  component: UserOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserOutlined>;

export const Icon: Story = {
  render: () => {
    return <UserOutlined size="20px" />;
  },
};
