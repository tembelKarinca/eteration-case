import React, { useContext, useState } from 'react'
import styles from './PlusMinusInput.module.scss'
import { CartContext } from '../CartProvider';
import { addToCart, decrementItemQuantity } from '@/store/cartReducer';

export default function PlusMinusInput({ data }) {
    const { dispatch } = useContext(CartContext);
    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };
    const decrementToCardHandler = (product) => {
        dispatch(decrementItemQuantity(product))
    }


    return (
        <div className={styles.number}>
            <button onClick={() => decrementToCardHandler(data)} className={styles.minus}>-</button>
            <input type="text" readOnly value={data.quantity} />
            <button onClick={() => addToCartHandler(data)} className={styles.plus}>+</button>
        </div>
    )
}
