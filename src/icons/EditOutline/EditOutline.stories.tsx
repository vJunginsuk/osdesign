import type { Meta, StoryObj } from '@storybook/react';

import EditOutline from './EditOutline';

const meta: Meta<typeof EditOutline> = {
  component: EditOutline,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditOutline>;

export const Icon: Story = {
  render: () => {
    return <EditOutline size="20px" />;
  },
};
