import React from 'react'
import styles from './FilterContainer.module.scss'
import FilterSort from './FilterSort'
import FilterBrands from './FilterBrands'
import FilterModel from './FilterModel'

export default function FilterContainer({ data }) {

    return (
        <div className='d-flex gap-4 flex-column'>
            <FilterSort />
            <FilterBrands data={data} />
            <FilterModel data={data} />
        </div>
    )
}
