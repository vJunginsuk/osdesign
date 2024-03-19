import React from 'react';
import { iconProps } from '../../interfaces/controls';
import classNames from 'classnames';

const EditOutline = (props: iconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      fill="none"
      width={size ? size : '14px'}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M3 9.75 5.625 12m-3-2.25 7.395-7.653a2.039 2.039 0 0 1 2.883 2.883L5.25 12.375 1.5 13.5l1.125-3.75z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={color ? '' : 'os-icon-path'}
        stroke={color ? color : ''}
      />
    </svg>
  );
};

export default EditOutline;
