import type { Meta, StoryObj } from '@storybook/react';
import HomeFilled from './HomeFilled';

const meta: Meta<typeof HomeFilled> = {
  component: HomeFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeFilled>;

export const Icon: Story = {
  render: () => {
    return <HomeFilled size="20px" />;
  },
};
