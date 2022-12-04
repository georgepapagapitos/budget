import React from 'react';
import classNames from 'classnames';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'submit' | 'cancel' | 'reset' | 'delete';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = 'submit',
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames({
    'button': true,
    'button-submit': variant === 'submit',
    'button-cancel': variant === 'cancel',
    'button-reset': variant === 'reset',
    'button-delete': variant === 'delete',
  }, className);
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
