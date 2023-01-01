import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons'
import Popover from 'react-bootstrap/Popover';
import { Button, ButtonGroup, ListGroup, OverlayTrigger } from 'react-bootstrap'

// import styles from '../styles/Main.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const popover = (
//   <Popover id="popover-content-download">
//     <Popover.Header as="h3">Select a Size</Popover.Header>
//     <Popover.Body>
//             <form>
//                 <ListGroup className={styles.listGroup}>
//                     <ListGroup.Item>
//                         <div className={styles.radio}>
//                             <label><input type="radio" name="reg"/> 640×426 | JPG | 40KB</label>
//                         </div>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         <div className={styles.radio}>
//                             <label><input type="radio" name="reg"/> 1280×853 | JPG | 132KB</label>
//                         </div>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         <div className={styles.radio}>
//                             <label><input type="radio" name="reg"/> 1920×1280 | JPG | 279KB</label>
//                         </div>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         <div className={styles.radio}>
//                             <label><input type="radio" name="reg"/> 5184×3456 | JPG | 1.4MB</label>
//                         </div>
//                     </ListGroup.Item>
//                     <ListGroup.Item>

//                     <ButtonGroup className="inline gap-1" aria-label="Basic example">
//                         <Button variant="success" className="p-1 rounded-pill" type="submit"><FontAwesomeIcon className="ms-1" icon={faDownload} /> Download</Button>
//                         <Button variant="success" className="p-1 rounded-pill" type="submit"><FontAwesomeIcon className="ms-1" icon={faEye} /> Preview</Button>
//                     </ButtonGroup>
//                     </ListGroup.Item>
//                 </ListGroup>
//             </form>
//     </Popover.Body>
//   </Popover>
// );


function Header() {


    const [show, setShow] = useState("")
    const [clicked, setClicked] = useState("")
    
    const toggleClass = () => {
        if(show!=""){
            setShow("");
            setClicked("");
        }else{
            // setShow(`${styles.show}`);
            // setClicked(`${styles.clicked}`);
        }
    };


  return (
    <div>
        






        
        <div className="header">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1><a className="brand" href="index.html">Nature</a></h1>
                        {/* <!-- <a className="brand" href="index.html"><img alt="Logo" src="img/logo.jpg"></a> --> */}
                    </div>
                </div>

                <div className="col-md-12">
                    <h1>Responsive Photography Template</h1>

                    <p className="tagline">
                        Duis turpis non ornare vitae mollis lorem.
                    </p>
                    <a className="btn" data-toggle="popover" data-container="body" data-placement="top" data-html="true" id="download"><i className="fa fa-download"></i>Free Download</a>
                    <div id="popover-content-download">
                        <form>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="radio">
                                        <label><input type="radio" name="reg" /> 640×426 | JPG | 40KB</label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="radio">
                                        <label><input type="radio" name="reg" /> 1280×853 | JPG | 132KB</label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="radio">
                                        <label><input type="radio" name="reg" /> 1920×1280 | JPG | 279KB</label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="radio">
                                        <label><input type="radio" name="reg" /> 5184×3456 | JPG | 1.4MB</label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <button type="submit"><i className="fa fa-download"></i>Download</button>
                                    <button type="submit"><i className="fa fa-eye"></i>Preview</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>























        {/* <div className={styles.header} style={{backgroundImage: `url("img/header-bg.jpg")`}}>
            <div className={`${styles.container} ${styles.textCenter}`}>
                <div className={styles.row}>
                    <div className={styles.colMd12}>
                        <h1><a className={styles.brand} href="index.html">Nature</a></h1>
                        <a className={styles.brand} href="index.html"> */}
                            {/* <Image alt="Logo" 
                                width={100}
                                height={24}
                                src="/img/logo.jpg" 
                            /> */}
                        {/* </a>
                    </div>
                </div> */}

                {/* <div className={styles.colMd12}>
                    <h1>Responsive Photography Template</h1>

                    <p className={styles.tagline}>
                        Duis turpis non ornare vitae mollis lorem.
                    </p>
                    
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <a className={styles.btn} data-toggle="popover" data-container="body" data-placement="top" data-html="true" id={styles.download}><FontAwesomeIcon icon={faDownload} />Free Download</a> */}
                        {/* <Button variant="success">Click me to see</Button> */}
                    {/* </OverlayTrigger>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Header