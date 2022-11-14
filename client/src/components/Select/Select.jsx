import React from 'react';
import './select.scss';

export const Select = ({ children, className, disabled, id, onChange, value, ...props }) => {

  const selectClasses = `select${disabled ? ' disabled' : ''}`;;

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
