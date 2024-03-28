import React, { useState } from 'react';
import Flex from '../components/Flex/Flex';
import '../assets/styles/index.scss';
import Button from '../components/Button/Button';
import CloseOutline from '../icons/CloseOutline/CloseOutline';
import Modal from '../feedback/Modal/Modal';
import Test from './Test';
import {
  info,
  confirm,
  warning,
  error,
  success,
} from '../feedback/Dialog/Dialog';

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
      title: '사용한 비밀번호가 3개월이 지났습니다.',
      message: '비밀번호를 변경해주세요.',
      okText: '변경하기',
      cancelText: '다음에 변경하기',
      onOk: () =>
        success({
          okText: '확인',
          title: '비밀번호가 성공적으로 변경됐습니다.',
        }),
    });
  };
  const onClickAlret = () => {
    info({
      title: 'Info',
      okText: '확인',
      message: '변경되었습니다.',
    });
  };
  const onClickWarning = () => {
    warning({
      okText: '확인',
      message: '비밀번호를 변경해 주세요.',
    });
  };

  const onClickError = () => {
    error({
      okText: '확인',
      title: '비밀번호가 틀렸습니다.',
      message: '비밀번호를 변경해주세요.',
    });
  };
  const onClickSuccess = () => {
    success({
      title: '비밀번호가 성공적으로 변경됐습니다.',
    });
  };

  return (
    <>
      <Flex align="center" justify="between" style={{ marginTop: '20px' }}>
        <Button type="primary" size="medium" onClick={onClickModalOpen}>
          modal open
        </Button>
        <Button type="outline" onClick={onClickDialogOpen}>
          Confirm open
        </Button>
        <Button type="text" onClick={onClickAlret}>
          Alart open
        </Button>
        <Button type="icon" icon={<CloseOutline />} />
        <Button type="primary" onClick={onClickWarning}>
          Warning open
        </Button>
        <Button type="primary" onClick={onClickError}>
          error open
        </Button>
        <Button type="primary" onClick={onClickSuccess}>
          Success open
        </Button>
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
