import React from 'react';
import classNames from 'classnames';

type btnType = 'outline' | 'primary' | 'text';

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: btnType;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, children, type, disabled } = props;
  const classes = classNames(
    'os-btn',
    classNames,
    {
      [`os-btn-${type}`]: type,
    },
    disabled && 'os-btn-disabled',
  );
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export default Button;
