import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ErrorFilled = (props: IIconProps) => {
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
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
      <path
        d="M13.694 13.694a1.045 1.045 0 0 0 0-1.478L11.478 10l2.216-2.216a1.045 1.045 0 0 0-1.478-1.478L10 8.522 7.784 6.306a1.045 1.045 0 1 0-1.478 1.478L8.522 10l-2.216 2.216a1.045 1.045 0 0 0 1.478 1.478L10 11.478l2.216 2.216c.408.408 1.07.408 1.478 0z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ErrorFilled;
