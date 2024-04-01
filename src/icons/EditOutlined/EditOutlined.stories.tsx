import type { Meta, StoryObj } from '@storybook/react';
import EditOutlined from './EditOutlined';

const meta: Meta<typeof EditOutlined> = {
  component: EditOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditOutlined>;

export const Icon: Story = {
  render: () => {
    return <EditOutlined size="20px" />;
  },
};
