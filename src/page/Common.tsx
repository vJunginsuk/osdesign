import React, { useState } from 'react';
import Flex from '../components/Flex/Flex';
import '../assets/styles/index.scss';
import Button from '../components/Button/Button';
import CloseOutline from '../icons/CloseOutline/CloseOutline';
import Modal from '../feedback/Modal/Modal';

const Common = () => {
  console.log();
  const [modalOpen, setModalOpen] = useState(false);
  const onClickModalOpen = () => {
    setModalOpen(true);
  };
  const onClickModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Flex align="center" justify="between" style={{ marginTop: '20px' }}>
      <Button type="primary" size="medium" onClick={onClickModalOpen} />
      <Button type="outline">확인</Button>
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
  );
};

export default Common;
