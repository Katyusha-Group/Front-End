// import { describe, it, expect, vi, test } from "vitest";
// import { Movies } from './Movies';
// Imports

import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import UserPage from './UserPage';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the UserPage component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><UserPage /></Router.BrowserRouter></ContextInfo>);
  });
});
// describe("UserPage component", () => {
//   it("should render the UserPageHeader component", () => {
//     const { getByTestId } = render(<UserPage />);
//     expect(getByTestId("userPage-header")).toBeInTheDocument();
//   });
// });
test("UserPage component", () => {
  // it("should render the Instructorall component", () => {
  //   const { getByTestId } = render(<UserPage />);
  //   expect(getByTestId("instructor-all")).toBeInTheDocument();
  // });
});
test("UserPage component", () => {
  // it("should render the weekly schedule table", () => {
  //   const { getByText } = render(<UserPage />);
  //   expect(getByText("برنامه هفتگی")).toBeInTheDocument();
  // });
});
