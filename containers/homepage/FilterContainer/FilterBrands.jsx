import React, { useContext, useEffect, useState } from 'react'
import styles from './FilterContainer.module.scss'
import { ProductContext } from '@/pages'
import { brandFilter } from '@/utils/productFilterHelper'

export default function FilterBrands() {
    const { productList, setProductList, setFilteredProducts, setIsFiltered } = useContext(ProductContext)
    const [brands, setBrands] = useState([])
    useEffect(() => {
        const array = []
        productList?.map((prod) => {
            array.includes(prod?.brand) ? '' : array.push(prod?.brand)
        })
        setBrands(array)
    }, [])

    const handleBrand = (e) => {
        const filteredByBrand = brandFilter(productList, e.target.value)
        setFilteredProducts(filteredByBrand)
        e.target.checked ? setIsFiltered(true) : setIsFiltered(false)
    }

    return (
        <div className={styles.filter_brand_container}>
            <span>Brands</span>
            <div className={styles.filter_list_container} >
                <input className={styles.search} type="text" placeholder='search' />
                <div className={styles.filter_list}>
                    {brands?.map((brand, key) => {
                        return (
                            <label key={key} htmlFor={brand}>  <input type="checkbox" name='brand' id={brand} value={brand} onChange={handleBrand} ></input> {brand} </label>
                        )
                    })}
                </div>




            </div>

        </div>
    )
}
