import type { Meta, StoryObj } from '@storybook/react';
import HomeOutline from './HomeOutline';

const meta: Meta<typeof HomeOutline> = {
  component: HomeOutline,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeOutline>;

export const Icon: Story = {
  render: () => {
    return <HomeOutline size="20px" />;
  },
};
