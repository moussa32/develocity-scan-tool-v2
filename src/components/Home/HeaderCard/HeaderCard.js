import React from 'react'
import styles from './HeaderCard.module.css';

const HeaderCard = ({ image, title }) => {
    return (
        <div className={styles.header_card}>
            <div className={styles.background_image}>
                <img src={image} alt="star" className={styles.icon} />
            </div>
            <div className={styles.container_header}>
                <h5 className={styles.header}>{title}</h5>
            </div>
        </div>
    )
}

export default HeaderCard