import classNames from 'classnames';
import React from 'react';
import './textField.scss';

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> { }

export const TextField: React.FC<TextFieldProps> = ({
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
  const textFieldClasses = classNames({
    'text-field': true,
  }, className);

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
