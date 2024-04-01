import type { Meta, StoryObj } from '@storybook/react';
import ExcelFilled from './ExcelFilled';

const meta: Meta<typeof ExcelFilled> = {
  component: ExcelFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExcelFilled>;

export const Icon: Story = {
  render: () => {
    return <ExcelFilled size="20px" />;
  },
};
