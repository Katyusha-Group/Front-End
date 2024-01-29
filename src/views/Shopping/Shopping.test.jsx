// import { describe, it, expect, vi, test } from "vitest";
// import { Movies } from './Movies';
// Imports

import { describe, it, expect, vi, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shopping from './Shopping';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
    it('should render the Shopping component without crashing', () => {
        render(<ContextInfo><Router.BrowserRouter><Shopping /></Router.BrowserRouter></ContextInfo>);
    });
});

// test("UserPage component", () => {
//   it("should render the Instructorall component", () => {
//     const { getByTestId } = render(<UserPage />);
//     expect(getByTestId("instructor-all")).toBeInTheDocument();
//   });
// });
test("Shopping component", () => {
    // it("should render the weekly schedule table", () => {
    //   const { getByText } = render(<UserPage />);
    //   expect(getByText("برنامه هفتگی")).toBeInTheDocument();
    // });
});
