import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button/Button';
import Portal from './Portal';
import { IModalProps } from '../../interfaces/props.interface';
import ModalHeader from '../components/ModalHeader';
import ModalFooter from '../components/ModalFooter';

const Modal = (props: IModalProps) => {
  const {
    title,
    children,
    open,
    onClose,
    onOk,
    onCancel,
    onDelete,
    onBakClose,
    footer,
    okText,
    cancelText,
    deleteText,
    className,
    width,
    style,
    closeIcon,
    fullIcon,
  } = props;

  // ## portlId 에 ID name 부여
  const portalId = useMemo(() => 'portal-root', []);

  // ## 새 root 담기
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  // ## modal이 실행됐을 때 root 아래 portal-root 생성해 modal경로 생성
  useEffect(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);
    if (open) {
      setContainer(newContainer);
      return () => {
        document.getElementById(portalId)?.remove();
      };
    } else {
      setContainer(null);
      document.getElementById(portalId)?.remove();
    }
  }, [portalId, open]);

  // ## classname, style
  const classesWrap = classNames('os-modal-wrap', className);
  const styles = {
    width: width,
    ...style,
  };

  return (
    <Portal container={container}>
      <div className={open ? 'os-modal' : 'os-hide'}>
        <div className="os-modal-mask" onClick={onBakClose ? onBakClose : undefined} />
        <div className={classesWrap} style={styles}>
          {/* header */}
          <ModalHeader title={title} closeIcon={closeIcon} onClose={onClose} fullIcon={fullIcon} />
          {/* contents */}
          <section>{children}</section>
          {/* footer */}
          {footer !== null && (
            <ModalFooter
              okText={okText}
              cancelText={cancelText}
              deleteText={deleteText}
              onOk={onOk}
              onCancel={onCancel}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
