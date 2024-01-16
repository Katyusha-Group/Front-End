import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import Notification from '../Sidebar/Notification';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the UserPage component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><Notification /></Router.BrowserRouter></ContextInfo>);
  });
});
test("Notification component", () => {
  // it("should render the Instructorall component", () => {
  //   const { getByTestId } = render(<Notification />);
  //   expect(getByTestId("instructor-all")).toBeInTheDocument();
  // });
});
test("Notification component", () => {
  // it('should render the weekly schedule table', () => {
  //   const { getByText } = render(<Notification />);
  //   expect(getByText('برنامه هفتگی')).toBeInTheDocument();
  // });
});
