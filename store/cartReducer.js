const initialState = [];

export const initializer = (initialValue = initialState) => {
    if (typeof localStorage !== 'undefined') {
        const localData = localStorage.getItem('localCart')
        const data = JSON.parse(localData || "[]");
        return data

    }
    return initialValue

}



export const cartReducer = (state, action) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return state.find((item) => item.name === action.item.name)
                    ? state.map((item) =>
                        item.name === action.item.name
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }
                            : item
                    )
                    : [...state, { ...action.item, quantity: 1 }];

            case "REMOVE_FROM_CART":
                return state.filter((item) => item.name !== action.item.name);

            case "DECREMENT_QUANTITY":
                return state.find((item) => item.name === action.item.name)?.quantity ===
                    1
                    ? state.filter((item) => item.name !== action.item.name)
                    : state.map((item) =>
                        item.name === action.item.name
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item
                    );

            case "CLEAR_CART":
                return initialState;
            case "SET_CART":
                return [...action.item];

            default:
                return state;
        }
    }
    const nextState = reducer(state, action)
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('localCart', JSON.stringify(nextState))
    }
    return nextState;
};

export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item
});
export const setCart = (item) => ({
    type: "SET_CART",
    item
});

export const decrementItemQuantity = (item) => ({
    type: "DECREMENT_QUANTITY",
    item
});

export const removeFromCart = (item) => ({
    type: "REMOVE_FROM_CART",
    item
});

export const clearCart = () => ({
    type: "CLEAR_CART"
});
