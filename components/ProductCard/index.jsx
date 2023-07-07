import React, { useContext } from 'react'
import styles from './ProductCard.module.scss'

import { addToCart } from '@/store/cartReducer';
import { CartContext } from '../CartProvider';


export default function ProductCard({ data }) {
    const { dispatch } = useContext(CartContext);
    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.product_card}>
            <a href={`/details/${data?.id}`}
            > <img src={data?.image} alt={data?.name}></img>
                <span>{data?.price + " ₺"}</span>
                <p>{data?.name}</p></a>

            <button onClick={() => addToCartHandler(data)} href="/"> Add to Cart</button>

        </div>
    )
}
