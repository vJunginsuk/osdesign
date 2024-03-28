import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const CloseOutline = (props: IIconProps) => {
  const { className, size, color } = props;
  const classes = classNames(className, 'os-icon-svg');
  return (
    <svg
      width={size ? size : '16px'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M14.654 3.06a1.5 1.5 0 0 1 2.12 0l.165.165a1.5 1.5 0 0 1 0 2.121L5.346 16.94a1.5 1.5 0 0 1-2.12 0l-.165-.164a1.5 1.5 0 0 1 0-2.121L14.654 3.06z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
      <path
        d="M16.94 14.654a1.5 1.5 0 0 1 0 2.121l-.165.164a1.5 1.5 0 0 1-2.121 0L3.06 5.346a1.5 1.5 0 0 1 0-2.12l.164-.165a1.5 1.5 0 0 1 2.121 0L16.94 14.654z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CloseOutline;
