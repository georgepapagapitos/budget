import classNames from 'classnames';
import React from 'react';
import './select.scss';

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> { }

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  disabled,
  id,
  onChange,
  value,
  ...props
}) => {
  const selectClasses = classNames({
    "select": true,
    "disabled": disabled,
  }, className);

  return (
    <select
      id={id}
      className={selectClasses}
      disabled={disabled}
      onChange={onChange}
      value={value}
      {...props}
    >
      {children}
    </select>
  );
};
