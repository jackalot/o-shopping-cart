import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";

describe("ShopItem component", () => {
    it("renders correct div", ()=> {
        const { getByRole } = render(<ShopItem></ShopItem>);
        expect(getByRole("div").textContent).toMatch("Price");
    })
})