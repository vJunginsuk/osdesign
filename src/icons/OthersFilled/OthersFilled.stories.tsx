import type { Meta, StoryObj } from '@storybook/react';
import OthersFilled from './OthersFilled';

const meta: Meta<typeof OthersFilled> = {
  component: OthersFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OthersFilled>;

export const Icon: Story = {
  render: () => {
    return <OthersFilled size="20px" />;
  },
};
