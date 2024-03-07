import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex, { flexProps } from './Flex';

export default {
  component: Flex,
  title: 'Flex',
} as Meta;

const Template: Story<flexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <button>click</button>
      <button>click</button>
      <button>click</button>
      <button>click</button>
      <button>click</button>
    </>
  ),
  gap: '8px',
  vertical: true,
  wrap: false,
  className: '',
  align: 'center',
  justify: 'center',
  style: '',
};
