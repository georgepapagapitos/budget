import classNames from 'classnames';
import React from 'react';
import './label.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}

export const Label: React.FC<LabelProps> = ({
  className,
  id,
  label,
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
      {label}
    </label>
  );
};
