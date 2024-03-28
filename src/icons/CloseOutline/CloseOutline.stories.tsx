import type { Meta, StoryObj } from '@storybook/react';

import CloseOutline from './CloseOutline';

const meta: Meta<typeof CloseOutline> = {
  component: CloseOutline,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CloseOutline>;

export const Icon: Story = {
  render: () => {
    return <CloseOutline size="16px" />;
  },
};
