import { cartReducer, initializer, setCart } from "@/store/cartReducer";
import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], initializer);

    return (
        <CartContext.Provider
            value={{
                cart,
                dispatch
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
