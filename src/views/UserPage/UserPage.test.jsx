import { describe, it, expect, vi, test } from "vitest";
// import { Movies } from './Movies';
import { render } from "@testing-library/react";
import UserPage from "./UserPage.jsx";

describe("Movies", () => {
  /**... */
  it("should render the the list of movies", () => {
    /**... */
    const { getByTestId } = render(<UserPage />);
    expect(getByTestId("movies-list").children.length).toBe(items.length);
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
