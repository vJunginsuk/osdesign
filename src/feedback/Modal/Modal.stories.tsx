import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../../controls/Button/Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);
    const onClickModalOpen = () => {
      setModalOpen(true);
    };
    const onClickModalClose = () => {
      setModalOpen(false);
    };
    return (
      <>
        <Button onClick={onClickModalOpen}>modal open</Button>
        <Modal
          title="Modal header title"
          open={modalOpen}
          onClose={onClickModalClose}
          okText="확인"
          cancelText="취소"
        >
          111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        </Modal>
      </>
    );
  },
};
