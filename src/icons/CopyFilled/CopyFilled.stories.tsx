import type { Meta, StoryObj } from '@storybook/react';
import CopyFilled from './CopyFilled';

const meta: Meta<typeof CopyFilled> = {
  component: CopyFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CopyFilled>;

export const Icon: Story = {
  render: () => {
    return <CopyFilled size="20px" />;
  },
};
