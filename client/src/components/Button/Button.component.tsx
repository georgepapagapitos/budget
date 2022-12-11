import React from 'react';
import classNames from 'classnames';
import './button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames({
    'button': true,
    'button-primary': variant === 'primary',
    'button-secondary': variant === 'secondary',
    'button-tertiary': variant === 'tertiary',
  }, className);
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};
