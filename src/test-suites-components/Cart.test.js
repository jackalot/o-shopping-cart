import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { fireEvent, getByDisplayValue, getByLabelText, getByRole, getByTestId, getByText, render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import CartNotification from "../components/CartNotification";
import Cart from "../components/Cart";
describe("Cart component", () => {
    it("The Cart component has a 'Checkout' button", () => {
         //** Not the purpose of the test, just here so the elements can render */
         const mockStoredItems = [
            {
                itemName: "Taco",
                itemPricePer: 10.00,
                itemQuantity: 5,
            },
            {
                itemName: "Nachos",
                itemPricePer: 5.00,
                itemQuantity: 10,
            },
            {
                itemName: "Burrito",
                itemPricePer: 3.00,
                itemQuantity: 2,
            },
        ]
        const { getByRole } = render(<Cart
        ourItems = {mockStoredItems}></Cart>)
        expect(getByRole("button").textContent).toMatch("Checkout");
    })
    it("The cart component has a total price element", () => {
        //** Not the purpose of the test, just here so the elements can render */
        const mockStoredItems = [
            {
                itemName: "Taco",
                itemPricePer: 10.00,
                itemQuantity: 5,
            },
            {
                itemName: "Nachos",
                itemPricePer: 5.00,
                itemQuantity: 10,
            },
            {
                itemName: "Burrito",
                itemPricePer: 3.00,
                itemQuantity: 2,
            },
        ]
        const { getByText } = render(<Cart
        ourItems = {mockStoredItems}></Cart>)
        const result = getByText(/TOTAL PRICE/i)
        expect(result.textContent).toContain("TOTAL PRICE:");
    })
    it("The Cart component displays all of the needed list elements with their prices", () => {
        const mockStoredItems = [
            {
                itemName: "Taco",
                itemPricePer: 10.00,
                itemQuantity: 5,
            },
            {
                itemName: "Nachos",
                itemPricePer: 5.00,
                itemQuantity: 10,
            },
            {
                itemName: "Burrito",
                itemPricePer: 3.00,
                itemQuantity: 2,
            },
        ]
        /** Item Total Prices:
         * Tacos: $50.00
         * Nachos: $50.00
         * Burritos: $6.00
         * Total Price: $106.00
         */
        const { getByText } = render(<Cart
            ourItems = {mockStoredItems}>
        </Cart>)
         const TacoTest = getByText("Taco, Price Per: $10, Quantity Selected: 5 Total: $50")
         expect(TacoTest.textContent).toContain("Taco, Price Per: $10, Quantity Selected: 5 Total: $50");
    })
})