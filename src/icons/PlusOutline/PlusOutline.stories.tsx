import type { Meta, StoryObj } from '@storybook/react';

import PlusOutline from './PlusOutline';

const meta: Meta<typeof PlusOutline> = {
  component: PlusOutline,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlusOutline>;

export const Icon: Story = {
  render: () => {
    return <PlusOutline size="20px" />;
  },
};
