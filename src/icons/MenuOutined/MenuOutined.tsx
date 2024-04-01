import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const MenuOutined = (props: IIconProps) => {
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
        d="M2 4.4A1.4 1.4 0 0 1 3.4 3h13.2a1.4 1.4 0 1 1 0 2.8H3.4A1.4 1.4 0 0 1 2 4.4zM2 10a1.4 1.4 0 0 1 1.4-1.4h13.2a1.4 1.4 0 1 1 0 2.8H3.4A1.4 1.4 0 0 1 2 10zm1.4 4.2a1.4 1.4 0 1 0 0 2.8h13.2a1.4 1.4 0 1 0 0-2.8H3.4z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default MenuOutined;
