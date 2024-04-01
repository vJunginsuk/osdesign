import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const SettingFilled = (props: IIconProps) => {
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
        d="M8.356 2.757A1 1 0 0 1 9.326 2h1.348a1 1 0 0 1 .97.757l.453 1.814c.088.034.175.07.26.108l1.727-1.036a1 1 0 0 1 1.221.15l.953.953a1 1 0 0 1 .15 1.222l-1.052 1.755c.025.06.05.12.073.18l1.813.453a1 1 0 0 1 .758.97v1.348a1 1 0 0 1-.758.97l-1.813.453c-.028.071-.056.141-.086.21l1.065 1.777a1 1 0 0 1-.15 1.221l-.953.953a1 1 0 0 1-1.221.15l-1.777-1.065c-.069.03-.139.058-.21.086l-.453 1.813a1 1 0 0 1-.97.758H9.326a1 1 0 0 1-.97-.758l-.453-1.813a5.882 5.882 0 0 1-.18-.073l-1.755 1.052a1 1 0 0 1-1.222-.15l-.952-.953a1 1 0 0 1-.15-1.221l1.035-1.727a5.786 5.786 0 0 1-.108-.26l-1.814-.453a1 1 0 0 1-.757-.97V9.326a1 1 0 0 1 .757-.97l1.814-.453c.03-.078.062-.155.095-.23L3.643 5.968a1 1 0 0 1 .15-1.222l.953-.952a1 1 0 0 1 1.222-.15l1.705 1.022c.075-.033.152-.065.23-.095l.453-1.814zM12.91 10a2.91 2.91 0 1 1-5.818 0 2.91 2.91 0 0 1 5.818 0z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default SettingFilled;
