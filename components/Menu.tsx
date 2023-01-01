import React, { useEffect, useState } from 'react'
import styles from '../styles/Main.module.css'

function Menu() {
    
    // useEffect(() => {
    //     // alert(123);
    //     // Initiate nav menu
    //     $(`${styles.menu}, ${styles.overlay}`).click(function () {
    //         $('.menu').toggleClass('clicked');
    //         $('#nav').toggleClass('show');
    //     });
    // }, []);

    const [style, setStyle] = useState({
        unit_id: null,
        date: null,
        user: null,
        show: "show",
        page: 0,
        manager:null,
        per_page: 10,
        subset:false
    })

    const [show, setShow] = useState("")
    const [clicked, setClicked] = useState("")
    
    const toggleClass = () => {
        if(show!=""){
            setShow("");
            setClicked("");
        }else{
            setShow(`${styles.show}`);
            setClicked(`${styles.clicked}`);
        }
    };
    
  return (
    <div>
        
        <div className={`${styles.menu} ${clicked}`} onClick={toggleClass}><span></span> </div>
        <nav id={styles.nav} className={`${show}`}>
            <ul className={styles.main}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/blogs">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

        <div className={styles.overlay}></div>
    </div>
  )
}


export default Menu