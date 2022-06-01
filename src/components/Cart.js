import React from "react";
import "../css-component-files/Cart.css"
function Cart (props) {
    if(props.ourItems.length)
    {
    return <div className="Cart-container">
        <ul>
            {props.ourItems.map((item, i) =>
                <li key={i}>{item.itemName}, Price Per: ${item.itemPricePer}, Quantity Selected: {item.itemQuantity} Total: ${item.itemPricePer * item.itemQuantity}</li>
            )}
        </ul>
        <div className="Cart-TotalPriceDiv">        
            <p className="Cart-Cart-TotalPrice">TOTAL PRICE: $106.00</p>
        </div>
        <button className="Checkout">Checkout</button>
    </div>
    }
    else
    {
        return <div className="Cart-container">
            <ul>
                <li>Your cart is currently empty, please add something from below.</li>
            </ul>
        <div className="Cart-TotalPriceDiv">        
            <p className="Cart-Cart-TotalPrice">TOTAL PRICE: $0</p>
        </div>
        <button className="Checkout">Checkout</button>
    </div>
    }
}
export default Cart