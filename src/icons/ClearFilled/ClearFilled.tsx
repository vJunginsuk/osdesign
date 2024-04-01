import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ClearFilled = (props: IIconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      fill="none"
      width={size ? size : '16px'}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.71 2.072a.52.52 0 0 1 .212.737l-3.84 6.203 2.504 1.348a.52.52 0 0 1 .212.737.601.601 0 0 1-.79.197L7.998 8.06a.52.52 0 0 1-.211-.737.602.602 0 0 1 .79-.197l2.504 1.348 3.84-6.203a.602.602 0 0 1 .79-.198zM3.14 13.196l1.425 1.267c.184.164.478.15.643-.032l2.255-2.478c.21-.232.598.026.431.287l-1.767 2.776a.397.397 0 0 0 .181.577c2.076.96 5.724 2.527 6.534 2.4.404-.064.342-.634.254-1.439-.134-1.228-.328-3.002.985-4.36.207-.215.177-.565-.09-.71L7.969 8.227a.475.475 0 0 0-.621.158C6.57 9.62 5.018 11.6 3.29 12.437c-.3.146-.396.54-.15.759z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ClearFilled;
