import type { Meta, StoryObj } from '@storybook/react';
import WarningFilled from './WarningFilled';

const meta: Meta<typeof WarningFilled> = {
  component: WarningFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WarningFilled>;

export const Icon: Story = {
  render: () => {
    return <WarningFilled size="20px" />;
  },
};
