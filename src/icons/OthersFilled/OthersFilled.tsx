import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const OthersFilled = (props: IIconProps) => {
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
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5.333-6.667a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666zM11.333 10a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0zm4 1.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default OthersFilled;
