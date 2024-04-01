import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const SaveFilled = (props: IIconProps) => {
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
        d="M2 3a1 1 0 0 1 1-1h10.586a1 1 0 0 1 .707.293L16 4l1.707 1.707a1 1 0 0 1 .293.707V17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm2 .5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2zM6.5 12a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default SaveFilled;
