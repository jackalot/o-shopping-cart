import React from "react";
import "../css-component-files/CartNotification.css"
function CartNotification (props) {
    return <div onClick={props.handler} className="CartNotification-Container">
        <div className="CartNotification-Amount">
            Cart: {props.amount}
        </div>
    </div>
}
export default CartNotification;