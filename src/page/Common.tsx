import React, { useState } from 'react';
import Flex from '../components/Flex/Flex';
import '../assets/styles/index.scss';
import Button from '../components/Button/Button';
import CloseOutline from '../icons/CloseOutline/CloseOutline';
import Modal from '../feedback/Modal/Modal';
import Test from './Test';
import { confirm } from '../feedback/Dialog/Dialog';

const Common = () => {
  console.log();
  const [modalOpen, setModalOpen] = useState(false);
  const onClickModalOpen = () => {
    setModalOpen(true);
  };
  const onClickModalClose = () => {
    setModalOpen(false);
  };
  const onClickDialogOpen = () => {
    confirm({
      title: 'This is a notification message',
      message: '확인하시겠습니까?',
    });
  };

  return (
    <>
      <Flex align="center" justify="between" style={{ marginTop: '20px' }}>
        <Button type="primary" size="medium" onClick={onClickModalOpen} />
        <Button type="outline" onClick={onClickDialogOpen}>
          Confirm
        </Button>
        <Button type="text">확인</Button>
        <Button type="icon" icon={<CloseOutline />} />
        <Button type="primary">확인</Button>
        <Modal
          title="Test Header"
          open={modalOpen}
          okText="OK"
          cancelText="Cancel"
          onCancel={onClickModalClose}
          closeIcon={null}
        >
          12345
        </Modal>
      </Flex>
      <Test />
    </>
  );
};

export default Common;
