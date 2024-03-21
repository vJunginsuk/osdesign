export type TBtntType = 'outline' | 'primary' | 'text' | 'icon';
export type TBtntSize = 'small' | 'medium' | 'large';
export type TAlignType = 'start' | 'center' | 'end';
export type TJustifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export type TModalType = 'confirm' | 'error' | 'info' | 'warning';

export interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: TBtntType | string;
  icon?: JSX.Element;
  size?: TBtntSize | string;
  disabled?: boolean;
  danger?: boolean;
  style?: React.CSSProperties;
}
export interface IIconProps {
  color?: string;
  className?: string;
  size?: string;
}

export interface IModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  deleteText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
  onBakClose?: () => void;
  footer?: null;
  className?: string;
  width?: string;
  style?: React.CSSProperties;
  closeIcon?: null;
  fullIcon?: boolean;
  type?: TModalType;
}

export interface IFlexProps {
  children?: React.ReactNode;
  gap?: string & {};
  vertical?: boolean;
  wrap?: boolean;
  className?: string;
  align?: TAlignType | string;
  justify?: TJustifyType | string;
  style?: React.CSSProperties;
}