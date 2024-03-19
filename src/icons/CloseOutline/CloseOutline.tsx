import React from 'react';
import { iconProps } from '../../interfaces/controls';
import classNames from 'classnames';

const CloseOutline = (props: iconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      width={size ? size : '14px'}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M22.166 5.833 5.833 22.167m16.333 0L5.833 5.833"
        strokeWidth="2"
        strokeLinecap="round"
        className={color ? '' : 'os-icon-path'}
        stroke={color ? color : ''}
      />
    </svg>
  );
};

export default CloseOutline;
