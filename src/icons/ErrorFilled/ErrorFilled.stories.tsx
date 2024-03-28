import type { Meta, StoryObj } from '@storybook/react';
import ErrorFilled from './ErrorFilled';

const meta: Meta<typeof ErrorFilled> = {
  component: ErrorFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorFilled>;

export const Icon: Story = {
  render: () => {
    return <ErrorFilled size="20px" />;
  },
};
