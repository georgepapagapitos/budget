import React from 'react';
import './textField.scss';

export const TextField = ({
  autoComplete,
  className,
  id,
  name,
  onChange,
  required = true,
  type,
  value,
  ...props
}) => {

  const textFieldClasses = `text-field${className ? ` ${className}` : ''}`;

  return (
    <input
      autoComplete={!autoComplete ? 'off' : ''}
      className={textFieldClasses}
      id={id}
      name={name}
      onChange={onChange}
      required={required}
      type={type ? type : 'text'}
      value={value}
      {...props}
    />
  );
};
