import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { fireEvent, getByDisplayValue, getByLabelText, getByRole, getByTestId, getByText, render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import CartNotification from "../components/CartNotification";
import Cart from "../components/Cart";
describe("Cart component", () => {
    it("The Cart component has a 'Checkout' button", () => {
        const { getByRole } = render(<Cart></Cart>)
        expect(getByRole("button").textContent).toMatch("Checkout");
    })
    it("The cart component has a total price element", () => {
        const { getByText } = render(<Cart></Cart>)
        const result = getByText(/TOTAL PRICE/i)
        expect(result.textContent).toContain("TOTAL PRICE:");
    })
    /**it("The Cart component displays all of the needed list elements with their prices")*/
})