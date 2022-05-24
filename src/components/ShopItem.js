import React from "react";
function ShopItem (props) {
    return <div>
        {props.itemName}
        <div>
        {props.itemPrice}
        </div>
    </div>
}
export default ShopItem;