import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const CheckFilled = (props: IIconProps) => {
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
        d="M13.784 7.262a.851.851 0 0 1-.037 1.172l-4.405 4.282a.987.987 0 0 1-1.386 0L6.253 11.06a.85.85 0 0 1-.037-1.173.78.78 0 0 1 1.131-.037l1.302 1.265 4.004-3.892a.78.78 0 0 1 1.13.038z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CheckFilled;
