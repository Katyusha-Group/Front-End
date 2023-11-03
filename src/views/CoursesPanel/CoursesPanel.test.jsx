import { render } from '@testing-library/react';
import CoursesPanel from './CoursesPanel';
import { test,it } from 'vitest';

test('CoursesPanel component', () => {
  it('should render the CoursesPanel table component', () => {
    const { getByTestId } = render(<CoursesPanel />);
    expect(getByTestId('CoursesPanelTable')).toBeInTheDocument();
  });})
test('CoursesPanel component', () => {
  it('should render the DayRow component', () => {
    const { getByTestId } = render(<CoursesPanel />);
    expect(getByTestId('CoursesPanelDayRow')).toBeInTheDocument();
  });})