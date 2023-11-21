import { render } from '@testing-library/react';
import Instructorall from './Instructorall';
import { test,it } from 'vitest';

test('Instructorall component', () => {
  it('should render the Instructor component', () => {
    const { getByTestId } = render(<Instructorall />);
    expect(getByTestId('Instructor')).toBeInTheDocument();
  });})
test('Instructorall component', () => {
  it('should render the div component', () => {
    const { getByTestId } = render(<Instructorall />);
    expect(getByTestId('div')).toBeInTheDocument();
  });})