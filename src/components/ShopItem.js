import React from "react";
import '../css-component-files/ShopItem.css'
function ShopItem (props) {
    return <div className="ShopItem-Container">
        <div className="ShopItem-ItemName">
        {props.itemName}
        </div>
        <div className="ShopItem-Price">
        {props.itemPrice}
        </div>
        <label for={props.itemName + "quantity"}>Quantity</label>
        <input className="QuantityInput" name={props.itemName + "quantity"} type="number"></input>
        <button className="AddToCartBtn" onClick={props.handler}></button>
    </div>
}
export default ShopItem;