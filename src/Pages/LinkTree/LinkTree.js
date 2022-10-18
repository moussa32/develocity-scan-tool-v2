import React from 'react';
// import { GrShare } from "react-icons/gr";
import ShareIcon from './ShareIcon';
import styles from './LinkTree.module.css'
import logo from '../../assets/images/logo.png';
import LinkButton from './LinkButton';
import {
    FaPaperPlane,
    FaTwitter,
    FaFacebookF,
    FaTiktok,
} from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

export default function LinkTree() {
    const shareLinksData=[
        {
            title:'Website',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },
        {
            title:'Scanner',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },
        {
            title:'How to Buy',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },
        {
            title:'Swap Tool',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },
        {
            title:'Changelog',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },
        {
            title:'Contact',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            url:''

        },

    ]
    const shareNavigator = (text, title, url) => {
        if (navigator.share) {
            navigator.share({
                text: text,
                title: title,
                url: url
            }).catch(console.error);
        } else {
            alert("Your Browser not Support this Service")
        }
    }
    return (
        <>
            <div className={styles.treeContainer}>
                <div className={styles.shareWrapper}>
                    <span>Share</span>
                    <button className={styles['btn-share']}
                        onClick={() => shareNavigator('Check This Token', 'Develocity token report', window.location.href)}
                    >
                        <ShareIcon color='#8968E9' />
                    </button>

                </div>
                <div className={styles.info}>
                    <img src={logo} alt='logo' width={72} />
                    <h5>Develocity</h5>
                    <p>DeVelocity strives to create a safe and trustworthy crypto environment where investors and developers can interact securely, considering the transparent credibility and technical measures and standards.</p>
                    <div className={styles.iconWrapper}>
                        <a href=''>
                            <FaFacebookF />
                        </a>
                        <a href=''>
                            <AiFillYoutube />
                        </a>
                        <a href=''>
                            <AiOutlineInstagram />
                        </a>
                        <a href=''>
                            <FaTwitter />
                        </a>
                        <a href=''>
                            <FaTiktok />
                        </a>
                        <a href=''>
                            <FaPaperPlane />
                        </a>
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    {
                        shareLinksData.map((item, index)=>(
                            <LinkButton
                            key={index}
                            title={item.title}
                            shareNavigator={shareNavigator}
                            titleofshare={item.titleofshare}
                            textofshare={item.textofshare}
                            url='' /> 
                        ))
                    }
                </div>

            </div>


        </>
    )
}
