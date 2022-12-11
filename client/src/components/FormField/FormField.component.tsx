import React, { FC } from 'react';
import { Error, Label, Helper } from '..';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

export const FormField: FC<FormFieldProps> = ({
  children,
  error,
  helperText,
  label,
  ...props
}) => {
  return (
    <div className='form-field-wrapper' {...props}>
      <div className='form-field'>
        <Label>{label}</Label>
        <Helper>{helperText}</Helper>
        {error && <Error />}
      </div>
      {children}
    </div>
  );
};
