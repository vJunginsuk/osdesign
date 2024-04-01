import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const CopyFilled = (props: IIconProps) => {
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
        d="M11.293 3a1 1 0 0 1 .756.345l2.707 3.123a1 1 0 0 1 .244.655V16h2V6.88L13.55 3H11.294zM5 3H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1h2a1 1 0 0 0 1-1V6.88a1 1 0 0 0-.253-.664l-3.449-3.88A1 1 0 0 0 13.551 2H6a1 1 0 0 0-1 1zm6 1.176a.25.25 0 0 1 .44-.163l2.206 2.574a.25.25 0 0 1-.19.413H11.25a.25.25 0 0 1-.25-.25V4.176z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CopyFilled;
