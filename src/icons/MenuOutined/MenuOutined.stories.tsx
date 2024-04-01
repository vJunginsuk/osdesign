import type { Meta, StoryObj } from '@storybook/react';
import MenuOutined from './MenuOutined';

const meta: Meta<typeof MenuOutined> = {
  component: MenuOutined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuOutined>;

export const Icon: Story = {
  render: () => {
    return <MenuOutined size="20px" />;
  },
};
