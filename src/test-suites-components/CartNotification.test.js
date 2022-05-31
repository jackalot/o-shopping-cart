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
        expect(result.textContent).toBe("Cart: 4");
    })
    it("The 'Cart' Text Displays the number 25", () => {
        const { container }  = render(<CartNotification
            amount = {25}
            ></CartNotification>)
        const result = getByText(container, "Cart: 25")
        expect(result.textContent).toBe("Cart: 25");
    })
    it("Cart Notification calls handleOpenCart when clicked", () => {
        let cartOpened = false;
        function handleOpenCart(){
            cartOpened = true;
        }
        const { container } = render(<CartNotification handler={handleOpenCart} amount={2}></CartNotification>)
    })
})