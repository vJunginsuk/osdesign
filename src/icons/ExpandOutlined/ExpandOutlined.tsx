import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ExpandOutlined = (props: IIconProps) => {
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
        d="M2.5 2h5.667a.5.5 0 0 1 .5.5v1.667a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5zM2 17.5v-5.667a.5.5 0 0 1 .5-.5h1.667a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 .5.5V17.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5zm13.333.5H17.5a.5.5 0 0 0 .5-.5v-5.667a.5.5 0 0 0-.5-.5h-1.667a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5V17.5a.5.5 0 0 0 .5.5h3.5zM18 2.5v5.667a.5.5 0 0 1-.5.5h-1.667a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5H17.5a.5.5 0 0 1 .5.5z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ExpandOutlined;
