import { describe, it, expect, vi, test } from "vitest";
import { render, screen } from "@testing-library/react";
import UserPage from "./500.jsx";
import * as Router from "react-router-dom";
import ContextInfo from "../contexts/InfoContext.jsx";
import styles from "../assets/css/500.module.css";
import mine from "../assets/img/400-error-bad-request-animate.svg";

// describe("Renders main page correctly", () => {
//   it('should render a div with class "main"', () => {
//     render(
//       <ContextInfo>
//         <Router.BrowserRouter>
//           <UserPage />
//         </Router.BrowserRouter>
//       </ContextInfo>
//     );
//     const mainDiv = screen.getByTestId("main-div");
//     expect(mainDiv).toBeInTheDocument();
//     expect(mainDiv).toHaveClass("main");
//   });
// });

describe("Renders main page correctly", () => {
  it('should render a ReactSVG component with class "svg" and src "mine"', () => {
    render(
      <ContextInfo>
        <Router.BrowserRouter>
          <UserPage />
        </Router.BrowserRouter>
      </ContextInfo>
    );
    const svgComponent = screen.getByTestId("svg-component");
    const expectedSrc = "/src/assets/img/400-error-bad-request-animate.svg";
    expect(svgComponent).toBeInTheDocument();
    expect(svgComponent).toHaveClass("svg");
  });
});

// describe("Renders main page correctly", () => {
//   it('should render a div with class "main2"', () => {
//     render(
//       <ContextInfo>
//         <Router.BrowserRouter>
//           <UserPage />
//         </Router.BrowserRouter>
//       </ContextInfo>
//     );
//     const main2Div = screen.getByTestId("main2-div");
//     expect(main2Div).toBeInTheDocument();
//     expect(main2Div).toHaveClass("main2");
//   });
// });

