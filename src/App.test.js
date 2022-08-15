import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sign up form", () => {
  render(<App />);
  const linkElement = screen.getByText(/create your account/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders login form", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
