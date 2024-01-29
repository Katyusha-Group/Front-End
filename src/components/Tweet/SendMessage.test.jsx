import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SendMessage from "./SendMessage"; // Adjust the path as needed
import jest from "jest-mock";

const mockFetchData = jest.fn();

const mockSetData = jest.fn();

describe("SendMessage component", () => {
  it("renders without crashing", () => {
    render(<SendMessage fetchData={mockFetchData} setData={mockSetData} />);
  });
  it("updates input value on change", () => {
    const { getByRole } = render(<SendMessage fetchData={mockFetchData} setData={mockSetData} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "Test message" } });

    expect(input.value).toBe("Test message");
  });

  
  
});
