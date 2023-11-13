import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login.jsx";
import { test, it } from 'vitest';

test("Login component", () => {
    it("renders Login component", () => {
        render(<Login />);
        expect(screen.getByText("ورود به سایت")).toBeInTheDocument();
    });

    it("handles form submission", () => {
        render(<Login />);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve({ token: "test-token" }),
            })
        );

        fireEvent.change(screen.getByLabelText("ایمیل"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText("رمز عبور"), {
            target: { value: "password" },
        });
        fireEvent.click(screen.getByText("ورود"));

        expect(fetch).toHaveBeenCalledWith("https://katyushaiust.ir/accounts/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "test@example.com",
                password: "password",
            }),
        });

        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
        expect(screen.getByText("Welcome to the home page")).toBeInTheDocument();
    });
});
