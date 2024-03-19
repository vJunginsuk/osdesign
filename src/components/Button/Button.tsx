import React from 'react';
import classNames from 'classnames';
import { buttonProps } from '../../interfaces/controls';

const Button = (props: buttonProps) => {
  const { onClick, label, type, disabled, size, danger, icon, style } = props;
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
  const styles = {
    padding: icon && '0 12px 0 8px',
    ...style,
  };
  return (
    <button className={classes} onClick={onClick} disabled={disabled} style={styles}>
      {icon && <span className="os-btn-svg">{icon}</span>} {label}
    </button>
  );
};

export default Button;
