import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"; 
import { getByDisplayValue, getByLabelText, getByRole, render } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import CartNotification from "../components/CartNotification";

describe("CartNotification Component", () => {
    it("creates a snapshot for the whole element", () => {
        const { container } = render(<CartNotification
             amount = {3}
             ></CartNotification>)
        expect(container).toMatchSnapshot();
    })
})