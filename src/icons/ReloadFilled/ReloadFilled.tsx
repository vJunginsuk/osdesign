import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ReloadFilled = (props: IIconProps) => {
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
        d="M14.84 15.82A7.191 7.191 0 0 1 10.889 17v-2.1c.984 0 1.947-.287 2.765-.826a4.918 4.918 0 0 0 1.834-2.199 4.83 4.83 0 0 0 .283-2.83 4.877 4.877 0 0 0-1.362-2.51 5.002 5.002 0 0 0-2.549-1.34 5.051 5.051 0 0 0-2.876.278c-.91.37-1.687.999-2.234 1.805a4.853 4.853 0 0 0-.803 2.139h1.979l-2.963 3.5L2 9.417h1.803A6.93 6.93 0 0 1 4.976 6.11a7.088 7.088 0 0 1 3.192-2.578c1.299-.53 2.729-.669 4.108-.398 1.38.27 2.647.936 3.641 1.915a6.967 6.967 0 0 1 1.946 3.584 6.9 6.9 0 0 1-.404 4.045 7.025 7.025 0 0 1-2.62 3.141z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ReloadFilled;
