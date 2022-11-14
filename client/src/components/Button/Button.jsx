import React from 'react';
import './button.scss';

export const Button = ({ children, className, onClick, type, variant = 'submit', ...props }) => {

  const buttonClasses = `button${` button-${variant}${` ${className ? className : ''}`}`}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={variant === 'submit' ? 'submit' : type ? type : 'button'}
      {...props}
    >
      {children}
    </button>
  );
};
