import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import ShopItem from "../components/ShopItem";

describe("ShopItem component", () => {
    it("renders correct div", ()=> {
        const { getByRole } = render(<ShopItem></ShopItem>);
        expect(getByRole("div").textContent).toMatch("Price");
    })
})