import React from "react";
import CartNotification from "./components/CartNotification";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
function Shop () {
    return (
    <div> 
        <h1> Welcome to the shop!</h1>
        <CartNotification amount={1}></CartNotification>
        <Cart></Cart>
        <ShopItem itemName="Taco" itemPrice="10.00"></ShopItem>
    </div>
    );
}
export default Shop;