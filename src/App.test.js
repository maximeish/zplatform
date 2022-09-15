import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen, within } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders landing page component", () => {
  render(<App />);
  const { getByText } = within(screen.getByTestId("welcome-text"));
  // expect(
  //   getByText("Welcome to ZPlatform provided to you by Company Z")
  // ).toBeInTheDocument();
});
