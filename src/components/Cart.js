import React from "react";
import "../css-component-files/Cart.css"
function Cart (props) {
    
    return <div className="Cart-container">
        <ul>
            {props.ourItems.map((item, i) =>
                <li key={i}>{item.itemName}, Item Price: ${item.price}, Quantity Selected: {item.quantity}, Total: ${item.price * item.quantity} </li>
            )}
        </ul>
        <div className="Cart-TotalPriceDiv">        
            <p className="Cart-Cart-TotalPrice">TOTAL PRICE: $106.00</p>
        </div>
        <button className="Checkout">Checkout</button>
    </div>
}
export default Cart