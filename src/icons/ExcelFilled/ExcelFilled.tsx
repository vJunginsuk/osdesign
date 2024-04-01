import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const ExcelFilled = (props: IIconProps) => {
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
        d="M5 2a1 1 0 0 0-1 1v3h5.998a1 1 0 0 1 1 1v7.998a1 1 0 0 1-1 1H4V17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.376a1 1 0 0 0-.247-.659l-2.954-3.375A1 1 0 0 0 14.046 2H5zm9.438 1a.25.25 0 0 0-.438.165V6.25c0 .138.112.25.25.25h2.7a.25.25 0 0 0 .187-.415l-2.699-3.084zM2 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8zm5.931.81a.494.494 0 0 0-.182-.68l-.11-.062a.506.506 0 0 0-.686.184L6 9.884l-.953-1.632a.506.506 0 0 0-.687-.184l-.11.062a.494.494 0 0 0-.182.68L5.348 11l-1.28 2.191a.494.494 0 0 0 .182.68l.11.063c.24.136.547.054.687-.184L6 12.118l.953 1.632c.14.238.446.32.686.184l.11-.063a.494.494 0 0 0 .182-.68l-1.28-2.19 1.28-2.191z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default ExcelFilled;
