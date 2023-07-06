import React from 'react'
import styles from './CartContainer.module.scss'

export default function Checkout() {
    return (
        <div className={styles.checkout_container}>
            <span>Checkout</span>
            <div className={styles.checkout}>
                <p>Total Price: <span>12123131</span></p>
                <button>Checkout</button>

            </div>
        </div>
    )
}
