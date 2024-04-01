import type { Meta, StoryObj } from '@storybook/react';
import ExpandOutlined from './ExpandOutlined';

const meta: Meta<typeof ExpandOutlined> = {
  component: ExpandOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpandOutlined>;

export const Icon: Story = {
  render: () => {
    return <ExpandOutlined size="20px" />;
  },
};
