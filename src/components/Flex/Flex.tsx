import classNames from 'classnames';
import React from 'react';
import { flexProps } from '../../interfaces/layouts';

const index = (props: flexProps) => {
  const { children, style, vertical, wrap, className, align, justify, gap } = props;
  const classes = classNames('os-flex', vertical && 'os-flex-vertical', wrap && 'os-flex-wrap', className, {
    [`os-flex-align-${align}`]: align,
    [`os-flex-justify-${justify}`]: justify,
  });
  const styles = {
    gap: gap,
    ...style,
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

export default index;
