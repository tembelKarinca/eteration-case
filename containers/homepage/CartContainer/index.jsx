import PlusMinusInput from '@/components/PlusMinusInput'
import React, { useContext } from 'react'
import Cart from './Cart'
import Checkout from './Checkout'

export default function CartContainer() {

    return (
        <div className='d-flex gap-4 flex-column'>
            <Cart />
            <Checkout />

        </div>
    )
}
