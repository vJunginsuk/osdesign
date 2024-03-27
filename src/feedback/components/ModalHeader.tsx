import React from 'react';
import Button from '../../components/Button/Button';
import PlusOutline from '../../icons/PlusOutline/PlusOutline';
import CloseOutline from '../../icons/CloseOutline/CloseOutline';

export interface IModalHeaderProps {
  title?: string;
  closeIcon?: null;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  fullIcon?: boolean;
}

const ModalHeader = (props: IModalHeaderProps) => {
  const { title, closeIcon, onClose, fullIcon } = props;
  return (
    <header>
      <h3>{title}</h3>
      {/* <Button type="icon" icon={<CloseOutline />} onClick={onClose} /> */}
      <div className="os-modal-icon">
        <div className="os-modal-icon">
          {fullIcon === true && <Button type="icon" icon={<PlusOutline />} onClick={onClose} />}
          {closeIcon !== null && <Button type="icon" icon={<CloseOutline />} onClick={onClose} />}
        </div>
      </div>
    </header>
  );
};

export default ModalHeader;
