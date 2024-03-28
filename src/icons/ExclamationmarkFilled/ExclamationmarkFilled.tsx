import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ExclamationmarkFilled = (props: IIconProps) => {
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
        d="M9.185 15.193a.815.815 0 1 1 1.63 0 .815.815 0 0 1-1.63 0zM10.815 11.934a.815.815 0 1 1-1.63 0V7.045a.815.815 0 1 1 1.63 0v4.89z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ExclamationmarkFilled;
