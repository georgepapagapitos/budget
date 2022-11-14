import React from 'react';
import './label.scss';

export const Label = ({ id, label, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={`form-label ${props.className}`}
      {...props}
    >
      {label}
    </label>
  );
};
