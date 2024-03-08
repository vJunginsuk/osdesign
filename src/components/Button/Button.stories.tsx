import React from 'react';
// typescript 사용을 위한 필요요소
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
    label: {
      defaultValue: 'Button',
    },
  },

  // 문서 description
  parameters: {
    componentSubtitle: '버튼 타입을 지정합니다.',
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = { type: 'outline', label: 'button', disabled: false };

export const Primary = Template.bind({});
Primary.args = { type: 'primary', label: 'button', disabled: false };

export const Text = Template.bind({});
Text.args = { type: 'text', label: 'button', disabled: false };

export const Size = Template.bind({});
Size.args = { size: 'medium', label: 'click' };
