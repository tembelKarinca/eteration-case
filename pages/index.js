

import CartContainer from '@/containers/homepage/CartContainer'
import FilterContainer from '@/containers/homepage/FilterContainer'
import ProductContainer from '@/containers/homepage/ProductContainer'

import { createContext, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

export const ProductContext = createContext()

export default function Home(props) {

  const [productList, setProductList] = useState(props.pageProps.products)


  return (
    <>

      <ProductContext.Provider value={{ productList, setProductList }} >
        <Container>
          <Row>

            <Col lg={2}>
              <FilterContainer />
            </Col>
            <Col lg={8}>
              <ProductContainer />
            </Col>
            <Col lg={2}>
              <CartContainer />
            </Col>

          </Row>
        </Container>
      </ProductContext.Provider>



    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
  const data = await res.json()
  return {
    props: {
      products: data
    },
  }
}



