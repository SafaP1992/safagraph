
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Main.module.css'

export default function Footer() {
  return (
    <div id={styles.footer}>
        <Container>
            <Row className={styles.row}>
                <Col xs={12}>
                    <div className={styles.social}>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </Col>
                <Col xs={12}>
                    <p>Copyright &#169; <a href="#">Safagraph</a> All Rights Reserved.</p>
                    <p>Designed By <a href="https://shahcode.com">Shah Code</a></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
