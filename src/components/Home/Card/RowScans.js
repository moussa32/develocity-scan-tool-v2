import React from 'react'
import styles from './RowScans.module.css';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
const RowScans = ({ number, image, nametoken, scans, sponsored, contract, title }) => {
    // console.log("scam", typeof((scans)));
    const lang = localStorage.getItem("i18nextLng")
    return (
        <Link className={`text-decoration-none ${styles.container_row}`} to={`/token/${contract}`}>

            <div className={styles.header}>
                <h3 className={lang === "ar" ? styles.header_no_right : styles.header_no_left}>{number}</h3>
                <div className={styles.container_image}>
                    {/* {sponsored && <div className={styles.container_sponsored}>
                        <h6 className={styles.sponsored}>sponsored</h6>
                    </div>} */}
                    {image ? <img src={image} alt="star" className={lang === "ar" ? styles.icon_token_right : styles.icon_token_left} /> :
                        //    create a new image with the first letter of the name token
                        <div className={lang === "ar" ? styles.icon_token_letter_right : styles.icon_token_letter_left} >
                            <h6 className={styles.icon_token_text}>{nametoken.charAt(0)}</h6>
                        </div>

                    }
                    
                    <h3 className={styles.header_token}>{nametoken.length > 36 ? nametoken.substring(0, 36) + "..." : nametoken}</h3>
                    
                </div>

            </div>

            {scans===0 && <span className="isScam">Scam</span>}
            {/* {scans? <span className="isScam">Scam</span>:<span className="isNotScam">Scam</span>} */}

            <h3 className={styles.header_scans}>{
                title === "Price" ? `$${scans}` : scans
            }</h3>
        </Link>
    )
}

export default RowScans