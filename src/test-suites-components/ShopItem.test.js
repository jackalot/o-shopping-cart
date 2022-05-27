import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { getByDisplayValue, getByLabelText, getByRole, render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";

describe("ShopItem component", () => {
    it("renders the Add To Cart button", ()=> {
        const { getByRole } = render(<ShopItem></ShopItem>);
        expect(getByRole("button").className).toMatch("AddToCartBtn");
    })
    it("has a item name of Taco and a price of 10.00", ()=> {
        const { container } = render(<ShopItem></ShopItem>)
        expect(container).toMatchSnapshot();
    })
    it("ShopItem has a quantity field", () => {
        const { container } = render(<ShopItem itemName="Taco" itemPrice="10.00" />);
        const quantity = getByLabelText(container, "Quantity");
        expect(quantity.textContent).toBe('');
    })
})