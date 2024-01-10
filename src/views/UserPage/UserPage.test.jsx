import { describe, it, expect, vi, test } from "vitest";
import React from 'react'
// import { Movies } from './Movies';
import { render,screen } from "@testing-library/react";
import UserPage from "./UserPage.jsx";

it("should have hello world", ()=>{
  render(<UserPage/>)
  const message = screen.queryByText(/Hello/i);
  expect(message).toBeVisible();
})
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
