import type { Meta, StoryObj } from '@storybook/react';
import CalendarOutlined from './CalendarOutlined';

const meta: Meta<typeof CalendarOutlined> = {
  component: CalendarOutlined,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CalendarOutlined>;

export const Icon: Story = {
  render: () => {
    return <CalendarOutlined size="20px" />;
  },
};
