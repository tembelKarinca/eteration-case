import React, { useContext } from 'react'
import styles from './CartContainer.module.scss'
import { CartContext } from '@/components/CartProvider';

export default function Checkout() {
    const { cart } = useContext(CartContext);

    const { total } = cart.reduce(
        ({ total }, { price, quantity }) => ({

            total: total + quantity * price
        }),
        { total: 0 }
    );
    return (
        <div className={styles.checkout_container}>
            <span>Checkout</span>
            <div className={styles.checkout}>
                <p>Total Price: <span>{total.toFixed(2)}₺</span></p>
                <button>Checkout</button>

            </div>
        </div>
    )
}
