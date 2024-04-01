import type { Meta, StoryObj } from '@storybook/react';
import { Confirm, confirm, info } from './Dialog';
import Button from '../../controls/Button/Button';
import { useState } from 'react';

const meta: Meta<typeof Confirm> = {
  component: Confirm,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Confirmdialog: Story = {
  render: () => {
    const onClick = () => {
      confirm({
        title: 'confimr title',
        message: 'Do you want to save this issue?',
      });
    };

    return (
      <>
        <Button onClick={onClick}>Confirm</Button>
      </>
    );
  },
};
export const Infodialog: Story = {
  render: () => {
    const onClick = () => {
      info({
        title: 'info title',
        message: 'Do you want to save this issue?',
      });
    };

    return (
      <>
        <Button onClick={onClick}>Info</Button>
      </>
    );
  },
};
