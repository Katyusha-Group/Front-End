import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './SignUp.jsx';
import { test, it } from 'vitest';

test("SignUp component", () => {
    // it("renders SignUp component", () => {
    //     render(<SignUp />);
    //     expect(screen.getByText("ثبت نام")).toBeInTheDocument();
    // });

    // it("handles form submission", () => {
    //     render(<SignUp />);
    //     global.fetch = jest.fn().mockResolvedValueOnce({
    //         status: 201,
    //         json: jest.fn().mockResolvedValueOnce({ token: "mockToken", url: "mockUrl" }),
    //     });

    //     fireEvent.change(screen.getByLabelText("ایمیل"), {
    //         target: { value: "test@example.com" },
    //     });
    //     fireEvent.change(screen.getByLabelText("رمز عبور"), {
    //         target: { value: "password" },
    //     });
    //     fireEvent.change(screen.getByLabelText("تکرار رمز عبور"), {
    //         target: { value: "password" },
    //     });
    //     fireEvent.click(screen.getByText("ثبت نام"));

    //     expect(fetch).toHaveBeenCalledWith("https://katyushaiust.ir/accounts/signup/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             email: "test@example.com",
    //             password1: "password",
    //             password2: "password",
    //             department: undefined,
    //             gender: undefined,
    //         }),
    //     });
    // });
});