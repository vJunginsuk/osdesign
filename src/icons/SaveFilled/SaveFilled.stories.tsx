import type { Meta, StoryObj } from '@storybook/react';
import SaveFilled from './SaveFilled';

const meta: Meta<typeof SaveFilled> = {
  component: SaveFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SaveFilled>;

export const Icon: Story = {
  render: () => {
    return <SaveFilled size="20px" />;
  },
};
