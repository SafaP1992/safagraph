import React from 'react'
import { faComments, faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Main.module.css'


function Blogs() {
  return (
    <div>
        
        <div id={styles.blog}>
            <Container>
                <div className={styles.sectionHeader}>
                    <h2>Latest Blog</h2>
                </div>
                <Row>

                    <Col lg={6} className={`${styles.singleBlog}`}>
                        <Row>
                            <Col lg={6}>
                                <div className={styles.blogImg}>
                                    <div className={styles.box7}>
                                        <img src="img/blog-1.jpg" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.blogDes}>
                                    <h4>Lorem ipsum dolor</h4>
                                    <span> <FontAwesomeIcon icon={faEye} /> 80 Views <FontAwesomeIcon icon={faComments} />25 Comments</span>
                                    <p>
                                    {/* <i className={styles.fa-comment-o}></i> */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum feugiat, efficitur nibh nec, commodo tellus.
                                    </p>
                                    <a className={styles.btn} href="#">Read More</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className={`${styles.singleBlog}`}>
                        <Row>
                            <Col lg={6}>
                                <div className={styles.blogImg}>
                                    <div className={styles.box7}>
                                        <img src="img/blog-2.jpg" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.blogDes}>
                                    <h4>Lorem ipsum dolor</h4>
                                    <span> <FontAwesomeIcon icon={faEye} /> 80 Views <FontAwesomeIcon icon={faComments} />25 Comments</span>
                                    <p>
                                    {/* <i className={styles.fa-comment-o}></i> */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum feugiat, efficitur nibh nec, commodo tellus.
                                    </p>
                                    <a className={styles.btn} href="#">Read More</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className={`${styles.singleBlog}`}>
                        <Row>
                            <Col lg={6}>
                                <div className={styles.blogImg}>
                                    <div className={styles.box7}>
                                        <img src="img/blog-3.jpg" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.blogDes}>
                                    <h4>Lorem ipsum dolor</h4>
                                    <span> <FontAwesomeIcon icon={faEye} /> 80 Views <FontAwesomeIcon icon={faComments} />25 Comments</span>
                                    <p>
                                    {/* <i className={styles.fa-comment-o}></i> */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum feugiat, efficitur nibh nec, commodo tellus.
                                    </p>
                                    <a className={styles.btn} href="#">Read More</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className={`${styles.singleBlog}`}>
                        <Row>
                            <Col lg={6}>
                                <div className={styles.blogImg}>
                                    <div className={styles.box7}>
                                        <img src="img/blog-4.jpg" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.blogDes}>
                                    <h4>Lorem ipsum dolor</h4>
                                    <span> <FontAwesomeIcon icon={faEye} /> 80 Views <FontAwesomeIcon icon={faComments} />25 Comments</span>
                                    <p>
                                    {/* <i className={styles.fa-comment-o}></i> */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum feugiat, efficitur nibh nec, commodo tellus.
                                    </p>
                                    <a className={styles.btn} href="#">Read More</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>





                    
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Blogs