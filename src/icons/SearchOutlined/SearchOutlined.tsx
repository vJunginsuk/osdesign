import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const SearchOutlined = (props: IIconProps) => {
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
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.647 4.977a6 6 0 1 1 1.725-1.78l4.563 4.665c.479.489.479 1.282 0 1.771-.478.49-1.254.49-1.733 0l-4.555-4.656z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default SearchOutlined;
