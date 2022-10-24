import React from 'react'
import styles from './CardScans.module.css';
import { useTranslation } from 'react-i18next';
const Header = ({ titleofscore ,caption}) => {
    const { t } = useTranslation(["home"]);
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={styles.header_title}>
            <div className={styles.sub_header}>
                <h3 className={styles.header_number}>#</h3>
                <h3 className={lang === "ar" ? styles.header_number_right : styles.header_number_left}>{t("home:token")} </h3>
            </div>
            {
            caption && 
            <h3 className={styles.coulmn3}>{caption}</h3>
            }
            <h3 className={styles.header_scans}>{titleofscore}</h3>
        </div>
    )
}

export default Header