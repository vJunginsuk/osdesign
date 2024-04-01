import type { Meta, StoryObj } from '@storybook/react';
import SettingFilled from './SettingFilled';

const meta: Meta<typeof SettingFilled> = {
  component: SettingFilled,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SettingFilled>;

export const Icon: Story = {
  render: () => {
    return <SettingFilled size="20px" />;
  },
};
