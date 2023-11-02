import { render } from '@testing-library/react';
import UserPage from './UserPage.jsx';
import { test,it } from 'vitest';

test('UserPage component', () => {
  it('should render the UserPageHeader component', () => {
    const { getByTestId } = render(<UserPage />);
    expect(getByTestId('userPage-header')).toBeInTheDocument();
  });})
test('UserPage component', () => {
  it('should render the Instructorall component', () => {
    const { getByTestId } = render(<UserPage />);
    expect(getByTestId('instructor-all')).toBeInTheDocument();
  });})
test('UserPage component', () => {
  it('should render the weekly schedule table', () => {
    const { getByText } = render(<UserPage />);
    expect(getByText('برنامه هفتگی')).toBeInTheDocument();
  });
});