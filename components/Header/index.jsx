import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Header.module.scss'
import ProfileIcon from '@/public/Profile.svg'
import PortfeilIcon from '@/public/Portfeil.svg'

export default function Header() {
    return (
        <header className={styles.header}>

            <Container>
                <Row>
                    <Col md={2}>
                        <h3>Eteration</h3>

                    </Col>
                    <Col md={8}>
                        <input type="text" placeholder='search' />
                    </Col>
                    <Col md={2} className='d-flex justify-content-between' >
                        <div className='d-flex gap-2'>
                            <PortfeilIcon />
                            <p>524151551</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <ProfileIcon />
                            <p>ahmet</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}
