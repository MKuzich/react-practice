import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Test } from './Test';

describe('Test', () => {
  it('renders Test component', () => {
    render(<Test />);
    // screen.getByRole('heading');
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

// test('render Converter', () => {
//   //   const { asFragment } = render(<Converter />);
//   //   expect(asFragment()).toMatchSnapshot();
//   //   const title = screen.getByText(/currency exchange rates/i);
//   //   expect(title).toBeInTheDocument();
// });
