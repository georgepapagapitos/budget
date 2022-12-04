import React from 'react';
import './label.scss';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> { }

export const Label: React.FC<LabelProps> = ({ id, label, ...props }) => {
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
