import { render } from '@testing-library/react';
import Profile from './Profile';
import { test,it } from 'vitest';

test('Profile component', () => {
  it('should render the ProfileHeader component', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('profile-header')).toBeInTheDocument();
  });})
test('Profile component', () => {
  it('should render the Instructorall component', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('instructor-all')).toBeInTheDocument();
  });})
test('Profile component', () => {
  it('should render the leftpart component', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('leftpart')).toBeInTheDocument();
  });})
test('Profile component', () => {
  it('should render the weekly schedule table', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('برنامه هفتگی')).toBeInTheDocument();
  });
});