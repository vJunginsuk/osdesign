import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const UserOutlined = (props: IIconProps) => {
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
        d="M12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm.273 3.292a4 4 0 1 0-4.546 0A9 9 0 0 0 1 18h2a7 7 0 1 1 14 0h2a9 9 0 0 0-6.727-8.708z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default UserOutlined;
