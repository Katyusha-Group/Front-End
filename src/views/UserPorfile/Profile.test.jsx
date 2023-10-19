import '@testing-library/jest-dom'
import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  it('should render the weekly schedule table', () => {
    const { getByText } = render(<Profile />);
    const tableElement = getByText(/برنامه هفتگی/i);
    expect(tableElement).toBeInTheDocument();
  });

  it('should render the instructor list', () => {
    const { getByTestId } = render(<Profile />);
    const instructorListElement = getByTestId('instructor-list');
    expect(instructorListElement).toBeInTheDocument();
  });
});
// test('demo', () => {
//   expect(true).toBe(true)
// })
// import '@testing-library/jest-dom'
// import { render } from "@testing-library/react"
// // import App from "../App"

// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("Renders the main page", () => {
//     render(<Profile />)
//     expect(true).toBeTruthy()
// })