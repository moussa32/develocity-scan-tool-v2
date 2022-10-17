import React from 'react';
// import { GrShare } from "react-icons/gr";
import ShareButton from './ShareButton';
import styles from './LinkTree.module.css' 
import logo from '../../assets/images/logo.png';
import LinkButton from './LinkButton';
import {
    FaPaperPlane,
    FaTwitter,
    FaFacebookF,
    FaTiktok,
  } from "react-icons/fa";
import { AiOutlineInstagram,AiFillYoutube} from "react-icons/ai";

export default function LinkTree() {
  return (
    <>
    <div className={styles.treeContainer}>
        <div className={styles.shareWrapper}>
            <span>Share</span>
           <ShareButton />
            
        </div>
        <div className={styles.info}>
            <img src={logo} alt='logo' width={72}/>
            <h5>Develocity</h5>
            <p>DeVelocity strives to create a safe and trustworthy crypto environment where investors and developers can interact securely, considering the transparent credibility and technical measures and standards.</p>
            <div className={styles.iconWrapper}>
                <a href=''>
                    <FaFacebookF/>
                </a>
                <a href=''>
                    <AiFillYoutube/>
                </a>
                <a href=''>
                    <AiOutlineInstagram/>
                </a>
                <a href=''>
                    <FaTwitter/>
                </a>
                <a href=''>
                    <FaTiktok/>
                </a>
                <a href=''>
                    <FaPaperPlane/>
                </a>
            </div>
        </div>
        <div className={styles.linksContainer}>
            <LinkButton title='Website'/>

        </div>

    </div>


    </>
  )
}
