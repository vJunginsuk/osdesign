import React, { useEffect, useMemo, useState } from 'react';

import Button from '../../components/Button/Button';
import Portal from './Portal';

export interface modalProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal = (props: modalProps) => {
  const { children, open } = props;
  const portalId = useMemo(() => 'portal-root', []);

  const [container, setContainer] = useState<any>(null);

  useEffect(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);
    setContainer(newContainer);
    return () => {
      const containerDOM = document.getElementById(portalId);
      containerDOM?.remove();
    };
  }, [portalId]);
  if (!open) return null;

  return (
    <Portal container={container}>
      <div className={open ? 'os-modal' : 'os-hide'}>
        <div className="os-modal-mask" />
        <div>
          <header>title</header>
          <section>{children}</section>
          <footer>
            <Button size="small" type="primary">
              확인
            </Button>
            <Button size="small" type="primary">
              취소
            </Button>
            <Button size="small" type="primary" danger>
              삭제
            </Button>
          </footer>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
