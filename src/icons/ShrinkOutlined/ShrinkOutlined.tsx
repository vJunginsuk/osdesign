import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ShrinkOutlined = (props: IIconProps) => {
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
        d="M6 8.667H2.5a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5h1.667a.5.5 0 0 1 .5.5v5.667a.5.5 0 0 1-.5.5H6zM8.667 14v3.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-1.667a.5.5 0 0 1 .5-.5h5.667a.5.5 0 0 1 .5.5V14zM14 11.333h-2.167a.5.5 0 0 0-.5.5V17.5a.5.5 0 0 0 .5.5H13.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .5-.5v-1.667a.5.5 0 0 0-.5-.5H14zM11.333 6V2.5a.5.5 0 0 1 .5-.5H13.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 .5.5v1.667a.5.5 0 0 1-.5.5h-5.667a.5.5 0 0 1-.5-.5V6z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ShrinkOutlined;
