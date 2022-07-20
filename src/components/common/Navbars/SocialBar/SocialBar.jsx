import React from "react";
import styles from "./SocialBar.module.css";
import {FaPaperPlane} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'


const SocialBar=() =>{
    return(
        <div className={styles.socialBarSection} style={{ backgroundColor: '#F3F2F7' }}>
        <div className="container">
        <div className={styles.socialBar}>

        <ul className={styles.socialIcons}>
        <li><a href="#"><FaPaperPlane/></a></li>
        <li><a href="#"><FaTwitter/></a></li>
        <li><a href="#"><FaFacebookF/></a></li>
        </ul>

        <ul className={styles.socialBarNav}>
    <li><a href="#">advertise</a></li>
    <li><a href="#">changelog</a></li>
    <li><a href="#">whitepaper</a></li>
    <li className={styles.dropdown}>
  <button className={styles.dropbtn}>english<IoIosArrowDown/></button>
  <li className={styles.dropdownContent}>
    <a href="#">arabic</a>
    <a href="#">turkish</a>
  
  </li>
  </li>
        
  </ul>
       
       </div>
       
               </div>
               </div>
       
           
           )
       }
       
       export default SocialBar
       
