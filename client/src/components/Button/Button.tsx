import React from 'react';
import './button.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'submit' | 'cancel' | 'reset' | 'delete';
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, type, variant = 'submit', ...props }) => {

  const buttonClasses = `button${` button-${variant}${` ${className ? className : ''}`}`}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
