import React, { useEffect, useState } from 'react'
import styles from './FilterContainer.module.scss'

export default function FilterModel({ data }) {
  const [models, setModels] = useState([])
  useEffect(() => {
    const array = []
    data?.map((prod) => {
      array.includes(prod?.model) ? '' : array.push(prod?.model)
    })
    setModels(array)
  }, [data])
  return (
    <div className={styles.filter_brand_container}>
      <span>Models</span>
      <div>
        <input className={styles.search} type="text" placeholder='search' />
        {models?.map((model, key) => {
          return (
            <label key={key} htmlFor={model}>  <input type="checkbox" id={model} value={model} ></input> {model} </label>
          )
        })}



      </div>

    </div>
  )
}
