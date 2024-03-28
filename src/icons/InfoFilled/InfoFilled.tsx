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
        d="M9.709 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2c-.69 0-1.25.56-1.25 1.25v8.5a1.25 1.25 0 1 0 2.5 0v-8.5c0-.69-.56-1.25-1.25-1.25z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default InfoFilled;
