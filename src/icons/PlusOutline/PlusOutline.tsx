import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const PlusOutline = (props: IIconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      width={size ? size : '12px'}
      height={size ? size : '12px'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M10 17V10M10 10V3M10 10H3M10 10H17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={color ? '' : 'os-icon-path'}
        stroke={color ? color : ''}
      />
    </svg>
  );
};

export default PlusOutline;
