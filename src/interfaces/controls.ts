export type inputType = 'outline' | 'primary' | 'text';
export type inputSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  type?: inputType | string;

  size?: inputSize | string;
  disabled?: boolean;
  danger?: boolean;
}
