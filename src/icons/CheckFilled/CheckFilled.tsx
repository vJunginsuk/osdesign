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
        d="M17.706 4.296a1.03 1.03 0 0 1 .003 1.44L8.107 15.55c-.586.6-1.54.6-2.126 0l-3.69-3.772a1.03 1.03 0 0 1 .003-1.439.988.988 0 0 1 1.415.003l3.335 3.41L16.291 4.3a.988.988 0 0 1 1.415-.004z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CheckFilled;
