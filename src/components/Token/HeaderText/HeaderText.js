import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import styles from './HeaderText.module.css'
const HeaderText = ({ nameHeader, title }) => {
    return (
        <div className={styles.container_header}>
            <h2 className={styles.header}>{nameHeader}  </h2>
            <Tooltip title={title} arrow>
                <img className={styles.InfoLogo} src={require('../../../assets/images/info.png')} alt="logo" />
            </Tooltip>

        </div>
    )
}

export default HeaderText