import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './404.jsx';
import { test,it } from 'vitest';

test('NotFound', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
