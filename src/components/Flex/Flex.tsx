import classNames from 'classnames';
import React from 'react';
import { IFlexProps } from '../../interfaces/props.interface';

const index = (props: IFlexProps) => {
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
