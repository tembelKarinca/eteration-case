import DetailCardContainer from '@/containers/detailpage/DetailCardContainer'
import CartContainer from '@/containers/homepage/CartContainer'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function DetailPage(props) {
    const [product, setProduct] = useState()
    useEffect(() => {
        const productfil = props.pageProps.products?.find((item) => item.id === props.pageProps.slug)
        setProduct(productfil)
    }, [])


    return (
        <>
            <Container>
                <Row>

                    <Col lg={10}>
                        <DetailCardContainer data={product} />
                    </Col>
                    <Col lg={2}>
                        <CartContainer />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const slug = ctx.params.slug[0]
    const res = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
    const data = await res.json()

    return {
        props: {
            products: data,
            slug: slug
        },
    }
}