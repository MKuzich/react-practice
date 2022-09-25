import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SharedLayout } from './SharedLayout';

describe('SharedLayout', () => {
  it('renders Home Link', () => {
    render(<SharedLayout />);
    expect(screen.getByText(/home/i)).toBeInDocument();
  });
});
