import type { Meta, StoryObj } from '@storybook/react';
import ClearFilled from './ClearFilled';

const meta: Meta<typeof ClearFilled> = {
  component: ClearFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ClearFilled>;

export const Icon: Story = {
  render: () => {
    return <ClearFilled size="20px" />;
  },
};
