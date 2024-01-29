// import { describe, it, expect, vi, test } from "vitest";
// import { Movies } from './Movies';
// Imports

import { describe, it, expect, vi, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Chat from './Chat';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders Chat page correctly', () => {
    it('should render the Chat component without crashing', () => {
        render(<ContextInfo><Router.BrowserRouter><Chat /></Router.BrowserRouter></ContextInfo>);
    });
});

// test("UserPage component", () => {
//   it("should render the Instructorall component", () => {
//     const { getByTestId } = render(<UserPage />);
//     expect(getByTestId("instructor-all")).toBeInTheDocument();
//   });
// });
test("Chat component", () => {
    // it("should render the weekly schedule table", () => {
    //   const { getByText } = render(<UserPage />);
    //   expect(getByText("برنامه هفتگی")).toBeInTheDocument();
    // });
});
