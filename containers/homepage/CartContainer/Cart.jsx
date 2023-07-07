import React, { useContext } from 'react'
import styles from './CartContainer.module.scss'
import PlusMinusInput from '@/components/PlusMinusInput'
import { CartContext } from '@/components/CartProvider';

export default function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div className={styles.cart_container} >
            <span>Cart</span>
            <div className={styles.cart} >
                {cart?.map((prod, key) => {
                    return (
                        <div className={styles.cart_product} key={key}>
                            <div>
                                <p>{prod?.name}</p>
                                <span>{prod?.price + " ₺"}</span>
                            </div>
                            <PlusMinusInput data={prod} />
                        </div>
                    )
                })
                }


            </div>
        </div>

    )
}
