import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const InfoFilled = (props: IIconProps) => {
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
        d="M10.74 5.481a.815.815 0 1 1-1.629 0 .815.815 0 0 1 1.63 0zM9.111 8.74a.815.815 0 0 1 1.63 0v4.89a.815.815 0 0 1-1.63 0V8.74z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default InfoFilled;
