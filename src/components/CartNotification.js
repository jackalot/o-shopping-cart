import React from "react";
function CartNotification (props) {
    return <div className="CartNotification-Container">
        <div className="CartNotification-Amount">
            {props.amount}
        </div>
    </div>
}
export default CartNotification;