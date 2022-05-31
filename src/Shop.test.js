import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { getByDisplayValue, getByLabelText, getByRole, render } from "@testing-library/react";
import Shop from "./Shop";

describe("Shop Component", () => {
    it("'Welcome to the shop!' is rendered regardless of what state Shop is in", ()=> {
        const { getByRole } = render(<Shop></Shop>);
        expect(getByRole("heading").textContent).toMatch("Welcome to the shop!");
    })
})