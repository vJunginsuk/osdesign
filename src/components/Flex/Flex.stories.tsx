import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex, { flexProps } from './Flex';

export default {
  component: Flex,
  title: 'Flex',
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
      description: '수직 정렬',
    },
    justify: {
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      control: { type: 'radio' },
      description: '수평 정렬',
    },
  },

  // 문서 description
  parameters: {
    componentSubtitle: '요소 사이의 간격을 설정하는 데 적합합니다.\n다양한 수평 및 수직 정렬을 설정하는 데 적합합니다.',
  },
} as Meta;

const Template: Story<flexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      {Array.from(Array(10), (_, i) => (
        <button key={i}>Button</button>
      ))}
    </>
  ),
  gap: '8px',
  vertical: false,
  wrap: false,
  className: '',
  align: 'start',
  justify: 'start',
  style: '',
};

export const Align = Template.bind({});
Align.args = {
  children: (
    <>
      <button>click</button>
      <button>click</button>
    </>
  ),

  align: 'center',
};
