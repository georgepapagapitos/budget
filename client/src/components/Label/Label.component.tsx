import classNames from 'classnames';
import React from 'react';
import './label.scss';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  const labelClasses = classNames({
    'form-label': true,
  }, className);

  return (
    <label
      htmlFor={id}
      className={labelClasses}
      {...props}
    >
      {children}
    </label>
  );
};
