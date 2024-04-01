import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const Menu2Outlined = (props: IIconProps) => {
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
        d="M2.25 3a.25.25 0 0 0-.25.25v2.3c0 .138.112.25.25.25h2.167a.25.25 0 0 0 .25-.25v-2.3a.25.25 0 0 0-.25-.25H2.25zm0 5.6a.25.25 0 0 0-.25.25v2.3c0 .138.112.25.25.25h2.167a.25.25 0 0 0 .25-.25v-2.3a.25.25 0 0 0-.25-.25H2.25zM2 14.45a.25.25 0 0 1 .25-.25h2.167a.25.25 0 0 1 .25.25v2.3a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25v-2.3zM7.583 3a.25.25 0 0 0-.25.25v2.3c0 .138.112.25.25.25H17.75a.25.25 0 0 0 .25-.25v-2.3a.25.25 0 0 0-.25-.25H7.583zm-.25 5.85a.25.25 0 0 1 .25-.25H17.75a.25.25 0 0 1 .25.25v2.3a.25.25 0 0 1-.25.25H7.583a.25.25 0 0 1-.25-.25v-2.3zm.25 5.35a.25.25 0 0 0-.25.25v2.3c0 .138.112.25.25.25H17.75a.25.25 0 0 0 .25-.25v-2.3a.25.25 0 0 0-.25-.25H7.583z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default Menu2Outlined;
