import React, { useState } from "react";
import '../css-component-files/ShopItem.css'
function ShopItem (props) {
    const [quantity, setQuantity] = useState(0);
    function changeQuantity(newQuantity) {
        setQuantity(newQuantity);
    }
    return <div className="ShopItem-Container">
        <div className="ShopItem-ItemName">
       {props.itemName}
        </div>
        <div className="ShopItem-Price">
        Price: {props.itemPrice}
        </div>
        <label onChange={changeQuantity} for={props.itemName + "quantity"}>Quantity</label>
        <input className="QuantityInput" name={props.itemName + "quantity"} type="number"></input>
        <button className="AddToCartBtn" onClick={()=> props.handler(props.itemName, props.itemPrice)}>Add To Cart!</button>
    </div>
}
export default ShopItem;