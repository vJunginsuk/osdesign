import type { Meta, StoryObj } from '@storybook/react';
import ShrinkOutlined from './ShrinkOutlined';

const meta: Meta<typeof ShrinkOutlined> = {
  component: ShrinkOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShrinkOutlined>;

export const Icon: Story = {
  render: () => {
    return <ShrinkOutlined size="20px" />;
  },
};
