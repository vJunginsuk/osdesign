import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../interfaces/controls';

const Button = (props: ButtonProps) => {
  const { onClick, label, type, disabled, size, danger } = props;
  const classes = classNames(
    'os-btn',
    classNames,
    {
      [`os-btn-${type}`]: type,
      [`os-btn-${size}`]: size,
    },
    disabled && `os-btn-${type}-disabled`,
    danger && `os-btn-${type}-danger`,
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
