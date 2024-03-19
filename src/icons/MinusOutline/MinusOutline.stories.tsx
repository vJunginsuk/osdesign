import type { Meta, StoryObj } from '@storybook/react';

import MinusOutline from './MinusOutline';

const meta: Meta<typeof MinusOutline> = {
  component: MinusOutline,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MinusOutline>;

export const Icon: Story = {
  render: () => {
    return <MinusOutline size="20px" />;
  },
};
