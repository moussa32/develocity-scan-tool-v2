import React from 'react'
import styles from './RowScans.module.css';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
const RowScans = ({ number, image, nametoken, score, scam, sponsored, contract, title, scan, caption }) => {
    // console.log("scam", typeof((score)));
    console.log("scan:", (new Date(scan)).getTime())

    const calculateTimeAgo = () => {

        let date1, date2, total_seconds,total_minutes,total_hours,days_difference,month_difference
        if (caption === 'Time Ago') {
             date1 = new Date();
             date2 = new Date(scan);
             total_seconds = Math.abs(date2 - date1) / 1000;
             total_minutes = total_seconds / 60;
             total_hours = Math.floor(total_minutes / 60);
             days_difference = Math.floor(total_hours / (24));
             month_difference = Math.floor(days_difference / (30));
        }
        if(month_difference >0){
            return `${month_difference> 1 ? `${month_difference} months`:`${month_difference} month`} `
        }
        else if(days_difference>0){
            return `${days_difference> 1 ? `${days_difference} days`:`${days_difference} day`} `
        }
        else if(total_hours>0){
            return `${total_hours} h`
        }
        else if(total_minutes>0){
            return `${total_minutes} m`
        }
        else if(total_seconds){
            return `${total_seconds} s`
        }
    }

    const lang = localStorage.getItem("i18nextLng")
    return (
        <Link className={`text-decoration-none ${styles.container_row}`} to={`/token/${contract}`}>

            <div className={styles.header}>
                <h3 className={lang === "ar" ? styles.header_no_right : styles.header_no_left}>
                    {number}
                </h3>
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

                    <h3 className={styles.header_token}>
                        {nametoken.length > 36 ? nametoken.substring(0, 36) + "..." : nametoken}
                    </h3>

                </div>

            </div>

            {/* {scam===0 && <span className="isScam " style={{height:'18px', lineHeight:'18px', paddingTop:'0px'}}>Scam</span>} */}
            {/* {score? <span className="isScam">Scam</span>:<span className="isNotScam">Scam</span>} */}

            <h3 className={styles.headerScore}>
                {
                    caption === 'Scans' && scan
                }
                {
                    caption === 'Time Ago' && calculateTimeAgo()
                }
            </h3>

            <h3 className={`
                ${styles.header_scans}  
                ${score < 59 && styles.header_scans_red}
                ${(score >= 59 && score < 85) && styles.header_scans_yellow}
                ${score >= 85 && styles.header_scans_green}
            `}
            >
                {
                    title === "Price" ? `$${score}` : score
                }
            </h3>
        </Link>
    )
}

export default RowScans