import React, { useState } from 'react'
import styles from './PlusMinusInput.module.scss'

export default function PlusMinusInput() {
    const [value, setValue] = useState(1)

    const MinusFunc = () => {
        setValue(value - 1)

    }
    const PlusFunc = () => {
        setValue(value + 1)
    }

    return (
        <div className={styles.number}>
            <button onClick={MinusFunc} className={styles.minus}>-</button>
            <input type="text" readOnly value={value} />
            <button onClick={PlusFunc} className={styles.plus}>+</button>
        </div>
    )
}
