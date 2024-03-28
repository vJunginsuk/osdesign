import type { Meta, StoryObj } from '@storybook/react';
import ExclamationmarkFilled from './ExclamationmarkFilled';

const meta: Meta<typeof ExclamationmarkFilled> = {
  component: ExclamationmarkFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExclamationmarkFilled>;

export const Icon: Story = {
  render: () => {
    return <ExclamationmarkFilled size="20px" />;
  },
};
