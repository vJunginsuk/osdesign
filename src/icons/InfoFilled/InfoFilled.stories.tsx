import type { Meta, StoryObj } from '@storybook/react';
import InfoFilled from './InfoFilled';

const meta: Meta<typeof InfoFilled> = {
  component: InfoFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfoFilled>;

export const Icon: Story = {
  render: () => {
    return <InfoFilled size="20px" />;
  },
};
