import React from "react";
function ShopItem (props) {
    return <div className="ShopItem-Container">
        {props.itemName}
        <div className="ShopItem-Price">
        {props.itemPrice}
        </div>
    </div>
}
export default ShopItem;