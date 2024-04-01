import React from 'react';
import { IIconProps } from '../../interfaces/props.interface';
import classNames from 'classnames';

const DeleteFilled = (props: IIconProps) => {
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
        d="M7 2a1 1 0 0 0-1 1v2.556H2.444a.444.444 0 1 0 0 .888H4l.842 9.728A2 2 0 0 0 6.834 18h6.332a2 2 0 0 0 1.992-1.828L16 6.444h1.556a.444.444 0 0 0 0-.888H14V3a1 1 0 0 0-1-1H7zm6 3.556H7V3.389a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2.167zm-3.478 2.93a.5.5 0 0 1 1 0v6.703a.5.5 0 0 1-1 0V8.485zM6.499 7.98a.483.483 0 0 0-.465.52l.455 6.695c.02.275.258.49.534.479a.483.483 0 0 0 .465-.52L7.033 8.46a.517.517 0 0 0-.534-.479zm6.057 7.195a.483.483 0 0 0 .465.519.516.516 0 0 0 .534-.479l.455-6.696a.483.483 0 0 0-.465-.518.517.517 0 0 0-.534.478l-.455 6.696z"
        className={color ? '' : 'os-icon-fill'}
        fill={color ? color : ''}
      />
    </svg>
  );
};

export default DeleteFilled;
