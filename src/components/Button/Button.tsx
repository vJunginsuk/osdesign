import React from 'react';
import classNames from 'classnames';

type btnType = 'outline' | 'primary' | 'text';
type btnSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  type?: btnType;
  disabled?: boolean;
  size?: btnSize;
}

const Button = (props: ButtonProps) => {
  const { onClick, label, type, disabled, size } = props;
  const classes = classNames(
    'os-btn',
    classNames,
    {
      [`os-btn-${type}`]: type,
      [`os-btn-${size}`]: size,
    },
    disabled && 'os-btn-disabled',
  );
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      <span style={{ display: 'none' }}>12</span> {label}
    </button>
  );
};
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export default Button;
