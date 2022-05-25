import React from "react";
import "../css-component-files/Cart.css"
function Cart (props) {
    
    return <div className="Cart-container">
        <ul>
            <li className="Cart-cartItem">Taco, Price Per: 10.00, Quantity Selected: 5 Total: $50.00</li>
            <li className="Cart-cartItem">Nachos, Price Per: 5.00, Quantity Selected: 10 Total: $50.00</li>
            <li className="Cart-cartItem">Burrito, Price Per: 3.00, Quantity Selected: 2 Total: $6.00</li>
        </ul>
        <p>TOTAL PRICE: $106.00</p>
        <button className="Checkout">Checkout</button>
    </div>
}
export default Cart