
import CartContainer from '@/containers/homepage/CartContainer'
import FilterContainer from '@/containers/homepage/FilterContainer'
import ProductContainer from '@/containers/homepage/ProductContainer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

export default function Home({ data }) {
  const [productList, setProductList] = useState([])
  const [sortedProds, setSortedProds] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
    const data = await res.json()

    setProductList(data)
  }

  useEffect(() => {
    fetchData()

  }, [])
  useEffect(() => {
    SortPriceHighToLow()

  }, [productList])

  const SortNewToOld = () => {
    productList.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  }
  const SortOldToNew = () => {
    productList.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })

  }
  const SortPriceHighToLow = () => {
    productList.sort(function (a, b) {
      return (b.price) - (a.price)
    })
    setSortedProds(productList)
  }
  const SortPriceLowToHigh = () => {
    productList.sort(function (a, b) {
      return (a.price) - (b.price)
    })
  }

  console.log(productList)
  return (
    <>
      <Container>
        <Row>
          <Col lg={2}>
            <FilterContainer data={productList} />
          </Col>
          <Col lg={8}>
            <ProductContainer data={productList} />
          </Col>
          <Col lg={2}>
            <CartContainer />
          </Col>

        </Row>
      </Container>
    </>
  )
}
export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}



