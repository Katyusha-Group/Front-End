import { render } from '@testing-library/react';
import TimeRow from './TimeRow';
import { test,it } from 'vitest';

test('TimeRow component', () => {
  it('should render the ExamChart row component', () => {
    const { getByTestId } = render(<TimeRow />);
    expect(getByTestId('ExamChartRow')).toBeInTheDocument();
  });})
test('TimeRow component', () => {
  it('should render the ExamChart TimeName component', () => {
    const { getByTestId } = render(<TimeRow />);
    expect(getByTestId('ExamChartTimeName')).toBeInTheDocument();
  });})