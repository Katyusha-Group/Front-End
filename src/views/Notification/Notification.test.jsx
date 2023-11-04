import { render } from '@testing-library/react';
import Notification from './Notification.jsx';
import { test,it } from 'vitest';

test('Notification component', () => {
  it('should render the NotificationHeader component', () => {
    const { getByTestId } = render(<Notification />);
    expect(getByTestId('notification-header')).toBeInTheDocument();
  });})
test('Notification component', () => {
  it('should render the Instructorall component', () => {
    const { getByTestId } = render(<Notification />);
    expect(getByTestId('instructor-all')).toBeInTheDocument();
  });})
test('Notification component', () => {
  it('should render the weekly schedule table', () => {
    const { getByText } = render(<Notification />);
    expect(getByText('برنامه هفتگی')).toBeInTheDocument();
  });
});