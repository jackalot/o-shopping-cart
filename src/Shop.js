import React from "react";
import CartNotification from "./components/CartNotification";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
function Shop () {
    return (
    <div> 
        <h1> Welcome to the shop!</h1>
        <CartNotification amount={1}></CartNotification>
        <Cart items={[{
            Taco: {
               pricePer: 10.00,
                Quantity: 3, 
            }
        },
        {
            Nacho: {
               pricePer: 5.00,
                Quantity: 4, 
            }
        },
        {
            Burrito: {
               pricePer: 2.50,
                Quantity: 6, 
            }
        }
        ]}></Cart>
        <ShopItem itemName="Taco" itemPrice="10.00"></ShopItem>
    </div>
    );
}
export default Shop;