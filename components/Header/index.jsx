import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Header.module.scss'
import ProfileIcon from '@/public/Profile.svg'
import PortfeilIcon from '@/public/Portfeil.svg'
import { CartContext } from '../CartProvider'

export default function Header() {
    const { cart } = useContext(CartContext);
    const { total } = cart.reduce(
        ({ total }, { price, quantity }) => ({

            total: total + quantity * price
        }),
        { total: 0 }
    );
    return (
        <header className={styles.header}>

            <Container>
                <Row  >
                    <Col >
                        <a href="/">
                            <h3>Eteration</h3>
                        </a>

                    </Col>
                    <Col  >
                        <input type="text" placeholder='search' />
                    </Col>
                    <Col className='d-flex gap-2  flex-end justify-content-end' >
                        <div className='d-flex gap-2'>
                            <PortfeilIcon />
                            <p>{total.toFixed(2)} ₺</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <ProfileIcon />
                            <p>Veysel</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}
