import React from 'react'
import styles from './FilterContainer.module.scss'
import FilterSort from './FilterSort'
import FilterBrands from './FilterBrands'
import FilterModel from './FilterModel'

export default function FilterContainer() {

    return (
        <div className='d-flex mb-5 gap-4 flex-wrap flex-lg-column justify-content-center'>
            <FilterSort />
            <FilterBrands />
            <FilterModel />
        </div>
    )
}
