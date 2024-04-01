import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const CalendarOutlined = (props: IIconProps) => {
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
        d="M5 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V6h6V4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V6h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V4.5zm8 3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5h1.5V9h-13V7.5H5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5h6zm3.5 2.5v6.5h-13V10h13z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CalendarOutlined;
