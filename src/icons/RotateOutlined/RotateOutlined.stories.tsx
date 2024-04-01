import type { Meta, StoryObj } from '@storybook/react';
import RotateOutlined from './RotateOutlined';

const meta: Meta<typeof RotateOutlined> = {
  component: RotateOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RotateOutlined>;

export const Icon: Story = {
  render: () => {
    return <RotateOutlined size="20px" />;
  },
};
