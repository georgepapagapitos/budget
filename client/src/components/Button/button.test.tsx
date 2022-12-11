import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.component';

const buttonText = 'button text';
const buttonTestId = 'btn-test';

describe('button component', () => {
  test('renders', () => {
    render(<Button data-testid={buttonTestId}>{buttonText}</Button>);
    const element = screen.getByTestId(buttonTestId);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(buttonText);
  });
});
