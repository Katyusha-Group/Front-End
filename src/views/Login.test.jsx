import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login.jsx";
import {  describe, it, expect, vi, test} from 'vitest';
import * as Router from "react-router-dom";

describe("Login component", () => {
    it("renders Login component", () => {
        render(<Router.BrowserRouter><Login /></Router.BrowserRouter>);
        expect(screen.getByText("ورود به سایت")).toBeInTheDocument();
    });

    // it("handles form submission", () => {
    //     render(<Router.BrowserRouter><Login /></Router.BrowserRouter>);

    //     fireEvent.change(screen.getByLabelText("ایمیل"), {
    //         target: { value: "test@example.com" },
    //     });
    //     fireEvent.change(screen.getByLabelText("رمز عبور"), {
    //         target: { value: "password" },
    //     });
    //     fireEvent.click(screen.getByText("ورود"));


    //     expect(screen.getByText("Loading...")).toBeInTheDocument();
    //     // expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    //     expect(screen.getByText("Welcome to the home page")).toBeInTheDocument();
    // });
});
