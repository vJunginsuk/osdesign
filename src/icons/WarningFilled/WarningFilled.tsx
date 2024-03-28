import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const InfoFilled = (props: IIconProps) => {
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
        d="M8.882 2.682a1.257 1.257 0 0 1 2.236 0l6.707 12.272c.497.91-.124 2.046-1.118 2.046H3.293c-.994 0-1.615-1.136-1.118-2.046L8.882 2.682z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
      <path
        d="M9.185 15.193a.815.815 0 1 1 1.63 0 .815.815 0 0 1-1.63 0zM10.815 11.934a.815.815 0 1 1-1.63 0V7.045a.815.815 0 1 1 1.63 0v4.89z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default InfoFilled;
