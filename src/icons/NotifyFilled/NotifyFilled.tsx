import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const NotifyFilled = (props: IIconProps) => {
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
        d="M5.265 5.87C5.564 3.66 7.593 2 10 2c2.406 0 4.437 1.66 4.735 3.87l.83 6.15c.034.247.154.475.344.65l2.002 1.854c.19.176.056.476-.213.476H2.301c-.268 0-.402-.3-.212-.476L4.09 12.67c.19-.175.31-.403.344-.65l.83-6.15zM7 16c0 1.105 1.343 2 3 2s3-.895 3-2H7z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default NotifyFilled;
