import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { getByDisplayValue, getByLabelText, getByRole, getByText, render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import CartNotification from "../components/CartNotification";

describe("CartNotification Component", () => {
    it("creates a snapshot for the whole component", () => {
        const { container } = render(<CartNotification
             amount = {3}
             ></CartNotification>)
        expect(container).toMatchSnapshot();
    })
    it("The 'Cart' Text Displays the number 4", () => {
        const { container }  = render(<CartNotification
            amount = {4}
            ></CartNotification>)
        const result = getByText(container, "Cart: 4")
        expect(result).toBe("Cart: 4");
    })
})