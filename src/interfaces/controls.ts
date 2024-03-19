export type inputType = 'outline' | 'primary' | 'text' | 'icon';
export type inputSize = 'small' | 'medium' | 'large';

export interface buttonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  type?: inputType | string;
  icon?: any;
  size?: inputSize | string;
  disabled?: boolean;
  danger?: boolean;
  style?: React.CSSProperties;
}
export interface iconProps {
  color?: string;
  className?: string;
  size?: string;
}
