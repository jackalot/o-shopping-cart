import React, { useState } from "react";
import CartNotification from "./components/CartNotification";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
function Shop () {
    const [storedItems, setStoredItems] = useState([])
    const [openedCart, setOpenedCart] = useState(false);
    function storeThisItem(name, price, quantity) {
        setStoredItems([
            ...storedItems,
            {
                itemName: name,
                itemPricePer: price,
                itemQuantity: quantity,
            }
        ])
    }
    function handleOpenedCart () {
        if(openedCart === false)
        {
            setOpenedCart(true);
        }
        else
        {
            setOpenedCart(false);
        }
    }
    if(openedCart === false)
    {
        /** We haven't opened the cart yet, don't render the Cart component */
        return (
        <div> 
            <h1> Welcome to the shop!</h1>
            <CartNotification handler={handleOpenedCart} amount={storedItems.length}></CartNotification>
            <ShopItem handler={storeThisItem} itemName="Taco" itemPrice="10.00"></ShopItem>
        </div>
        );
    } 
    else {
        return (
            <div>
            <h1> Welcome to the shop!</h1>
            <Cart closeHandler={handleOpenedCart} ourItems={storedItems}></Cart>
            <ShopItem handler={storeThisItem} itemName="Taco" itemPrice="10.00"></ShopItem>
            </div>
        );
    }

}
export default Shop;