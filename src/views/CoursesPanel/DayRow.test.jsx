import { render } from '@testing-library/react';
import DayRow from './DayRow';
import { test,it } from 'vitest';

test('DayRow component', () => {
  it('should render the CoursesPanel row component', () => {
    const { getByTestId } = render(<DayRow />);
    expect(getByTestId('CoursesPanelRow')).toBeInTheDocument();
  });})
test('DayRow component', () => {
  it('should render the CoursesPanel DayName component', () => {
    const { getByTestId } = render(<DayRow />);
    expect(getByTestId('CoursesPanelDayName')).toBeInTheDocument();
  });})