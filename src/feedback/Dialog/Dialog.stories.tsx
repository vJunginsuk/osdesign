import type { Meta, StoryObj } from '@storybook/react';
import { Confirm, confirm, error, info, success, warning } from './Dialog';
import Button from '../../controls/Button/Button';

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
        message: '저장하시겠습니까?',
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
        message: 'info는 정보를 제공하는 dialog입니다.',
      });
    };

    return (
      <>
        <Button onClick={onClick}>Info</Button>
      </>
    );
  },
};
export const Successdialog: Story = {
  render: () => {
    const onClick = () => {
      success({
        title: 'success title',
        message: 'success는 성공했을 때 dialog입니다.',
      });
    };

    return (
      <>
        <Button onClick={onClick}>success</Button>
      </>
    );
  },
};
export const Warningsdialog: Story = {
  render: () => {
    const onClick = () => {
      warning({
        title: 'warning title',
        message: 'warning은 경고 dialog입니다.',
      });
    };

    return (
      <>
        <Button onClick={onClick}>warning</Button>
      </>
    );
  },
};
export const Errorsdialog: Story = {
  render: () => {
    const onClick = () => {
      error({
        title: 'error title',
        message: 'error는 에러일 경우 dialog입니다.',
      });
    };

    return (
      <>
        <Button onClick={onClick}>error</Button>
      </>
    );
  },
};
