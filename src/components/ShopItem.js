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
    </div>
}
export default ShopItem;