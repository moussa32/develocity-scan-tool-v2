import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import styles from './HeaderText.module.css'
// import { useTranslation } from 'react-i18next';

const HeaderText = ({ nameHeader, title }) => {
    // const { t } = useTranslation(["common"])
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={lang === "ar" ? styles.container_header_right : styles.container_header_left} >
            <h2 className={styles.header}>{nameHeader}  </h2>
            <Tooltip title={title} arrow>
                <img className={lang === "ar" ? styles.InfoLogo_right : styles.InfoLogo_left} src={require('../../../assets/images/info.png')} alt="logo" />
            </Tooltip>

        </div>
    )
}

export default HeaderText