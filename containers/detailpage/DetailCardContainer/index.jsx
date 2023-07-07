import React, { useContext } from 'react'
import styles from './DetailCardContainer.module.scss'
import { CartContext } from '@/components/CartProvider';
import { addToCart } from '@/store/cartReducer';

export default function DetailCardContainer({ data }) {
    const { dispatch } = useContext(CartContext);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };


    return (
        <div className={styles.detail_container}>
            <img src={data?.image} alt={data?.name} />
            <div className={styles.detail_content}>
                <h4>{data?.name}</h4>
                <span>{data?.price}₺</span>
                <button onClick={() => addToCartHandler(data)}>Add to Cart</button>
                <p>{data?.description}</p>
            </div>
        </div >
    )
}
