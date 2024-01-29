// import { describe, it, expect, vi, test } from "vitest";
// import { Movies } from './Movies';
// Imports

import { describe, it, expect, vi, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders Timeline page correctly', () => {
    it('should render the Timeline component without crashing', () => {
        render(<ContextInfo><Router.BrowserRouter><Timeline /></Router.BrowserRouter></ContextInfo>);
    });
});

// test("UserPage component", () => {
//   it("should render the Instructorall component", () => {
//     const { getByTestId } = render(<UserPage />);
//     expect(getByTestId("instructor-all")).toBeInTheDocument();
//   });
// });
test("Timeline component", () => {
    // it("should render the weekly schedule table", () => {
    //   const { getByText } = render(<UserPage />);
    //   expect(getByText("برنامه هفتگی")).toBeInTheDocument();
    // });
});
