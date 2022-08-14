import React from 'react'
import styles from './CopyRight.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const CopyRight = () => {
    const {t}=useTranslation(["common"])
    return (
        <div className='container mt-5'>
            <div className={styles.copy_right_container}>
                <h6 className={styles.copy_right}>{t("common:copyright")} </h6>
                {/*<h6 className={styles.copy_right}>{t("common:terms_conditions")}</h6>*/}
                <h6 className={styles.copy_right}> <Link to="/privacy-policy">{t("common:privacyPolicy")}</Link> </h6> 
            </div>
        </div>
    )
}

export default CopyRight