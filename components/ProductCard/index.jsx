import React from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'



export default function ProductCard({ data }) {
    return (
        <div className={styles.product_card}>
            <img src={data?.image} alt={data?.name}></img>
            <span>{data?.price + " ₺"}</span>
            <p>{data?.name}</p>
            <Link href="/"> Add to Cart</Link>

        </div>
    )
}
