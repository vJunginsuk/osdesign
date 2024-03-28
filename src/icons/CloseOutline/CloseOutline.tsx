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
        d="M16.775 3.06a1.5 1.5 0 0 0-2.121 0L10 7.715 5.346 3.061a1.5 1.5 0 0 0-2.12 0l-.165.164a1.5 1.5 0 0 0 0 2.121L7.714 10l-4.653 4.654a1.5 1.5 0 0 0 0 2.12l.164.165a1.5 1.5 0 0 0 2.121 0L10 12.286l4.654 4.653a1.5 1.5 0 0 0 2.121 0l.164-.164a1.5 1.5 0 0 0 0-2.121L12.286 10l4.653-4.654a1.5 1.5 0 0 0 0-2.121l-.164-.164z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default CloseOutline;
