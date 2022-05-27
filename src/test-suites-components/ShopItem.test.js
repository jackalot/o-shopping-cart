import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { getByLabelText, render } from "@testing-library/react";
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
    it("has the correct state for quantity", ()=> {
       
    })
})