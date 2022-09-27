import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Field } from './Field';

describe('Field', () => {
  it('renders Field component', () => {
    render(<Field />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });
});
