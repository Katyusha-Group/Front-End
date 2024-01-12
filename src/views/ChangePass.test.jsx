import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChangePassword from "./ChangePass.jsx";
import { test, it } from 'vitest';

test("Login component", () => {
    // it("renders ChangePassword component", () => {
    //     render(<ChangePassword />);
    //     const titleElement = screen.getByText("تغییر رمز عبور");
    //     expect(titleElement).toBeInTheDocument();
    // });

    // it("handles form submission", async () => {
    //     render(<ChangePassword />);
    //     const oldPasswordInput = screen.getByLabelText("رمز عبور فعلی");
    //     const newPasswordInput = screen.getByLabelText("رمز عبور جدید");
    //     const confirmPasswordInput = screen.getByLabelText("تکرار رمز عبور جدید");
    //     const submitButton = screen.getByText("تغییر رمز عبور");

    //     fireEvent.change(oldPasswordInput, { target: { value: "oldPassword123" } });
    //     fireEvent.change(newPasswordInput, { target: { value: "newPassword123" } });
    //     fireEvent.change(confirmPasswordInput, { target: { value: "newPassword123" } });

    //     fireEvent.click(submitButton);

    // })
});
