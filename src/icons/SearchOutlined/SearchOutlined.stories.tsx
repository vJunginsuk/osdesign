import type { Meta, StoryObj } from '@storybook/react';
import SearchOutlined from './SearchOutlined';

const meta: Meta<typeof SearchOutlined> = {
  component: SearchOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchOutlined>;

export const Icon: Story = {
  render: () => {
    return <SearchOutlined size="20px" />;
  },
};
