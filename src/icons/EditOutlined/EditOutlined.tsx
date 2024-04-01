import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const EditOutlined = (props: IIconProps) => {
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
        d="M3 1.75H1.75v16.5h16.5V10h-2.5v5.75H4.25V4.25H10v-2.5H3zm9.367 8.059-1.669-1.638 6.01-5.901a.952.952 0 0 1 1.329 0l.34.334a.91.91 0 0 1 0 1.304l-6.01 5.901zm-2.058.673c-.183.06-.358-.11-.296-.291l.685-2.02 1.669 1.638-2.058.673z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default EditOutlined;
