import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const HomeOutline = (props: IIconProps) => {
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
        d="M10.36 2.152a.5.5 0 0 0-.718 0l-7.5 7.735a.5.5 0 0 0 .36.848h1.234V17a1 1 0 0 0 1 1h4.012v-3.775a1 1 0 0 1 1-1h.506a1 1 0 0 1 1 1V18h4.012a1 1 0 0 0 1-1v-6.265H17.5a.5.5 0 0 0 .358-.848l-7.5-7.735z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default HomeOutline;
