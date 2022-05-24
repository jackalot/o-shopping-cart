import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event';

describe("App component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<App></App>);
    expect(getByRole("heading").textContent).toMatch("Welcome to the homepage!");
  });
})