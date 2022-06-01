import React, { useState } from "react";
import '../css-component-files/ShopItem.css'
function ShopItem (props) {
    const [quantity, setQuantity] = useState(0);
    function changeQuantity(newQuantity) {
        setQuantity(newQuantity.target.value);
    }
    return <div className="ShopItem-Container">
        <div className="ShopItem-ItemName">
       {props.itemName}
        </div>
        <div className="ShopItem-Price">
        Price: {props.itemPrice}
        </div>
        <label htmlFor={props.itemName + "quantity"}>Quantity</label>
        <input min={0} onChange={changeQuantity} className="QuantityInput"  id={props.itemName + "quantity"} name={props.itemName + "quantity"} type="number"></input>
        <button className="AddToCartBtn" onClick={()=> props.handler(props.itemName, props.itemPrice, quantity)}>Add To Cart!</button>
    </div>
}
export default ShopItem;