import React from 'react';
import classNames from 'classnames';
import { IButtonProps } from '../../interfaces/props.interface';

const Button = (props: IButtonProps) => {
  const { onClick, children, type, disabled, size, danger, icon, style } = props;
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
      {icon && <span className="os-btn-svg">{icon}</span>} {children}
    </button>
  );
};

export default Button;
