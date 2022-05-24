import React from "react";
import "../css-component-files/CartNotification.css"
function CartNotification (props) {
    return <div className="CartNotification-Container">
        <div className="CartNotification-Amount">
            {props.amount}
        </div>
    </div>
}
export default CartNotification;