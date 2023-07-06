import React, { useEffect, useState } from 'react'
import styles from './FilterContainer.module.scss'

export default function FilterBrands({ data }) {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        const array = []
        data?.map((prod) => {
            array.includes(prod?.brand) ? '' : array.push(prod?.brand)
        })
        setBrands(array)
    }, [data])

    return (
        <div className={styles.filter_brand_container}>
            <span>Brands</span>
            <div>
                <input className={styles.search} type="text" placeholder='search' />

                {brands?.map((brand, key) => {
                    return (
                        <label key={key} htmlFor={brand}>  <input type="checkbox" id={brand} value={brand} ></input> {brand} </label>
                    )
                })}





            </div>

        </div>
    )
}
