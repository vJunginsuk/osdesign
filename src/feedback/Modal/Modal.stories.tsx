import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../../components/Button/Button';
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
    return (
      <>
        <Button onClick={onClickModalOpen}>Click!!!!</Button>
        <Modal open={modalOpen}>111</Modal>
      </>
    );
  },
};
