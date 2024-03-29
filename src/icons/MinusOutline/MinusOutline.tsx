import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const MinusOutline = (props: IIconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      width={size ? size : '14px'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M3 10h14"
        strokeWidth="2"
        strokeLinecap="round"
        className={color ? '' : 'os-icon-path'}
        stroke={color ? color : ''}
      />
    </svg>
  );
};

export default MinusOutline;
