import { faLink, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Main.module.css'
import axios from 'axios';

function Gallery() {

    const [show, setShow] = useState("")
    const [galleries, setGalleries] = useState<any[]>([])

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await axios.get(`http://127.0.0.1:8000/api/images`);
        // console.log(JSON.stringify(data.data.data));
        // const manipulated = data.data.map((item) => {
        //   return {
        //     ...item,
        //     fullName: `${item.tite} ${item.name}`,
        //   };
        // });
        setGalleries(data.data.data);
    };

  return (
        
        <div id={styles.portfolio}>

            <Container fluid={true} >
                <div className={`${styles.sectionHeader} text-center`}>
                    <h2>Portfolio</h2>
                </div>
                <Row className="justify-content-md-center">

                    {
                        galleries.length > 0 && (
                            galleries.map((item, index) => {
                                return (
                                    <Col md={4} sm={6} xs={12} className={`${styles.portItem} p-0`}>
                                        <div className={styles.box7}>
                                            {/* <img src="img/portfolio/portfolio-1.jpg" /> */}
                                            <img src={`http://127.0.0.1:8000/images/`+item.path} />
                                            <div className={styles.boxContent}>
                                                <h3 className={styles.title}>{item.title}</h3>
                                                <span className={styles.post}>{item.path}</span>
                                                <ul className={styles.icon}>
                                                    <li><a href="#" data-toggle="modal" data-target="#modal-id"> <FontAwesomeIcon icon={faSearch} /></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modal-id"> <FontAwesomeIcon icon={faLink} /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                        )
                    }

                    {/* <Col md={4} sm={6} xs={12} className={`${styles.portItem} p-0`}>
                        <div className={styles.box7}>
                            <img src="img/portfolio/portfolio-1.jpg" />
                            <div className={styles.boxContent}>
                                <h3 className={styles.title}>Lorem ipsum</h3>
                                <span className={styles.post}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
                                <ul className={styles.icon}>
                                    <li><a href="#" data-toggle="modal" data-target="#modal-id"> <FontAwesomeIcon icon={faSearch} /></a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal-id"> <FontAwesomeIcon icon={faLink} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>

  )
}

export default Gallery