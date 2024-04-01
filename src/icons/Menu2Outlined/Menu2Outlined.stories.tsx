import type { Meta, StoryObj } from '@storybook/react';
import Menu2Outlined from './Menu2Outlined';

const meta: Meta<typeof Menu2Outlined> = {
  component: Menu2Outlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu2Outlined>;

export const Icon: Story = {
  render: () => {
    return <Menu2Outlined size="20px" />;
  },
};
