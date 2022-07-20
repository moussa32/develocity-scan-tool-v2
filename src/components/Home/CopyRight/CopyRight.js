import React from 'react'
import styles from './CopyRight.module.css'
const CopyRight = () => {
    return (
        <div className='container mt-5'>
            <div className={styles.copy_right_container}>
                <h6 className={styles.copy_right}>© 2022 Develocity</h6>
                <h6 className={styles.copy_right}>Terms & Conditions</h6>
                <h6 className={styles.copy_right}>Privacy Policy</h6>
            </div>
        </div>
    )
}

export default CopyRight