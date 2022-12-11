import React, { FC } from 'react';

export interface HelperProps extends React.HTMLAttributes<HTMLSpanElement> { }

export const Helper: FC<HelperProps> = ({ children, ...props }) => {
  return (
    <span {...props}>{children}</span>
  );
};
