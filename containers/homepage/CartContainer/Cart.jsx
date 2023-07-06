import React from 'react'
import styles from './CartContainer.module.scss'
import PlusMinusInput from '@/components/PlusMinusInput'

export default function Cart() {
    return (
        <div className={styles.cart_container} >
            <span>Cart</span>
            <div className={styles.cart} >
                <div className={styles.cart_product}>
                    <div>
                        <p>samsung</p>
                        <span>15223323</span>
                    </div>
                    <PlusMinusInput />
                </div>
                <div className={styles.cart_product}>
                    <div>
                        <p>samsung</p>
                        <span>15223323</span>
                    </div>
                    <PlusMinusInput />
                </div>
                <div className={styles.cart_product}>
                    <div>
                        <p>samsung</p>
                        <span>15223323</span>
                    </div>
                    <PlusMinusInput />
                </div>
                <div className={styles.cart_product}>
                    <div>
                        <p>samsung</p>
                        <span>15223323</span>
                    </div>
                    <PlusMinusInput />
                </div>

            </div>
        </div>

    )
}
