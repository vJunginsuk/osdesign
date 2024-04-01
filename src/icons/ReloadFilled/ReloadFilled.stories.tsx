import type { Meta, StoryObj } from '@storybook/react';
import ReloadFilled from './ReloadFilled';

const meta: Meta<typeof ReloadFilled> = {
  component: ReloadFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReloadFilled>;

export const Icon: Story = {
  render: () => {
    return <ReloadFilled size="20px" />;
  },
};
