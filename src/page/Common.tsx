import React, { useContext, useState } from 'react';
import Flex from '../layout/Flex/Flex';
import '../assets/styles/index.scss';
import Button from '../controls/Button/Button';
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
import { contextProps } from '../interfaces/props.interface';
import { ThemeContext } from '../stores/context';

const Common = () => {
  const { theme, onClickTheme, onChangeTheme } =
    useContext<contextProps>(ThemeContext);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
  const onmodalOnOk = () => {
    warning({
      okText: '확인',
      message: '비밀번호를 변경해 주세요.',
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
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Flex>
        <input
          type="radio"
          value="light"
          name="themeGrp"
          onChange={onChangeTheme}
          id="light"
        />
        <label htmlFor="light">light</label>
        <input
          type="radio"
          value="dark"
          name="themeGrp"
          onChange={onChangeTheme}
          id="dark"
        />
        <label htmlFor="dark">dark</label>
      </Flex>
      <Button type="primary" onClick={onClickTheme}>
        theme
      </Button>
      <Flex align="center" justify="between">
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
          onOk={onmodalOnOk}
          cancelText="Cancel"
          onCancel={onClickModalClose}
          closeIcon={null}
        >
          12345
        </Modal>
      </Flex>

      <Test />
    </div>
  );
};

export default Common;
