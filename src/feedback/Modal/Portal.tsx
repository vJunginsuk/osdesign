import React from 'react';
import ReactDOM from 'react-dom';

export interface portalProps {
  children: React.ReactElement;
  container: any;
}

const Portal = (props: portalProps) => {
  const { children, container } = props;
  if (!container) return null;
  return ReactDOM.createPortal(children, container);
};

export default Portal;
