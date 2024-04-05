export type TBtntType = 'outline' | 'primary' | 'text' | 'icon';
export type TBtntSize = 'small' | 'medium' | 'large';
export type TAlignType = 'start' | 'center' | 'end';
export type TJustifyType =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type TDialogType = 'confirm' | 'error' | 'info' | 'warning' | 'success';

export interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  deleteText?: string;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  onBakClose?: () => void;
  footer?: null;
  className?: string;
  width?: string;
  style?: React.CSSProperties;
  closeIcon?: null;
  fullIcon?: boolean;
  footerClassName?: string;
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

export interface IDialogFactory {
  Component?: any;
  onClosed?: () => void;
  onAfterClosed?: () => void;
  [x: string]: any;
}

export interface IConfirmProps {
  type?: TDialogType;
  isVisible?: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  deleteText?: string;
  message?: string;
  afterClose?: () => void;
  onClickClose?: React.MouseEventHandler<HTMLButtonElement>;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  onClose?: () => void;
  icons?: (type?: TDialogType) => React.ReactElement;
  contents?: (
    onCancelContent?: IConfirmProps['onClickClose'],
    onOkContent?: IConfirmProps['onOk'],
    message?: string,
    okTextString?: string,
  ) => any;
}

export interface IAlertConfig
  extends IDialogFactory,
    Pick<IConfirmProps, 'title' | 'message' | 'okText'> {}

export interface contextProps {
  theme: string;
  onClickTheme?: React.MouseEventHandler<HTMLButtonElement>;
  onChangeTheme?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface themeProps {
  children: React.ReactNode;
  color?: string;
}

export interface textFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}
