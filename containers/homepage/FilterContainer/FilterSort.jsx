import React from 'react'
import styles from './FilterContainer.module.scss'

export default function FilterSort() {

    return (

        <div className={styles.filter_sort_container}>
            <span>Sort By</span>
            <div>
                <label htmlFor="oldtonew">  <input type="radio" id='oldtonew' value="oldtonew" ></input> Old to new </label>
                <label htmlFor="newtoold">  <input type="radio" id='newtoold' value="newtoold" ></input> New to old </label>
                <label htmlFor="pricehightolow">  <input type="radio" id='pricehightolow' value="pricehightolow" ></input>Price high to low </label>
                <label htmlFor="pricelowtohigh">  <input type="radio" id='pricelowtohigh' value="pricelowtohigh" ></input> Price low to high </label>

            </div>

        </div>
    )
}
