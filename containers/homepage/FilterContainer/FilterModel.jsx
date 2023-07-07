import React, { useContext, useEffect, useState } from 'react'
import styles from './FilterContainer.module.scss'
import { ProductContext } from '@/pages'
import { modelFilter } from '@/utils/productFilterHelper'

export default function FilterModel({ }) {
  const { productList, setProductList, setFilteredProducts, setIsFiltered } = useContext(ProductContext)
  const [models, setModels] = useState([])
  useEffect(() => {
    const array = []
    productList?.map((prod) => {
      array.includes(prod?.model) ? '' : array.push(prod?.model)
    })
    setModels(array)
  }, [])
  const handleModel = (e) => {
    const filteredByModel = modelFilter(productList, e.target.value)
    setFilteredProducts(filteredByModel)
    e.target.checked ? setIsFiltered(true) : setIsFiltered(false)
  }
  return (
    <div className={styles.filter_brand_container}>
      <span>Models</span>
      <div className={styles.filter_list_container}>
        <input className={styles.search} type="text" placeholder='search' />
        <div className={styles.filter_list}>
          {models?.map((model, key) => {
            return (
              <label key={key} htmlFor={model}>  <input type="checkbox" id={model} value={model} name="model" onChange={handleModel} ></input> {model} </label>
            )
          })}</div>

      </div>




    </div >
  )
}
