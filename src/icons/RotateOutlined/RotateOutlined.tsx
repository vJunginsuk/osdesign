import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const RotateOutlined = (props: IIconProps) => {
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
        d="m15.04 7.283-2.496-1.11L14.134 4l.349 1.263c.478-.124.98-.13 1.455-.016.476.114.908.344 1.253.666.345.322.59.725.713 1.168.122.444.133 1.091 0 1.537h-1.09c.08-.267.074-.987 0-1.253a1.507 1.507 0 0 0-.428-.701 1.67 1.67 0 0 0-.75-.4 1.804 1.804 0 0 0-.874.01l.278 1.009zM3.5 16.5V9.694h11.128V16.5H3.5zM2 9.194a1 1 0 0 1 1-1h12.128a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.194z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default RotateOutlined;
