import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  it('renders without error', () => {
    render(<Profile />);
  });
});