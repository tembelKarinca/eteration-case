import React, { useContext } from 'react'
import styles from './FilterContainer.module.scss'
import { sortNewToOld, sortOldToNew, sortPriceHighToLow, sortPriceLowToHigh } from '@/utils/productSortHelper'
import { ProductContext } from '@/pages'



export default function FilterSort() {
    const { productList, setProductList } = useContext(ProductContext)

    const handlePriceHighToLowChange = (e) => {
        const highToLowArray = sortPriceHighToLow(productList)
        setProductList(highToLowArray)

    }
    const handlePriceLowToHighChange = (e) => {
        const lowToHighArray = sortPriceLowToHigh(productList)
        setProductList(lowToHighArray)
    }
    const handleOldToNew = () => {
        const oldToNewArray = sortOldToNew(productList)
        setProductList(oldToNewArray)
    }
    const handleNewToOld = () => {
        const newToOldArray = sortNewToOld(productList)
        setProductList(newToOldArray)
    }

    return (

        <div className={styles.filter_sort_container}>
            <span>Sort By</span>
            <div>
                <label htmlFor="oldtonew">  <input type="radio" id='oldtonew' value="oldtonew" name="sortbutton" onChange={handleOldToNew} ></input> Old to new </label>
                <label htmlFor="newtoold">  <input type="radio" id='newtoold' value="newtoold" name="sortbutton" onChange={handleNewToOld} ></input> New to old </label>
                <label htmlFor="pricehightolow">  <input type="radio" id='pricehightolow' value="pricehightolow" name="sortbutton" onChange={handlePriceHighToLowChange} ></input>Price high to low </label>
                <label htmlFor="pricelowtohigh">  <input type="radio" id='pricelowtohigh' value="pricelowtohigh" name="sortbutton" onChange={handlePriceLowToHighChange} ></input> Price low to high </label>

            </div>

        </div>
    )
}
