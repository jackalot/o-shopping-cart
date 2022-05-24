import React from "react";
import CartNotification from "./components/CartNotification";
function Shop () {
    return (
    <div> 
        <h1> Welcome to the shop!</h1>
        <CartNotification amount={1}></CartNotification>
    </div>
    );
}
export default Shop;