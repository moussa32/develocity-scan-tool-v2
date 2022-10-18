import React from 'react'
import styles from './LinkTree.module.css'
import ShareButton from './ShareButton'
export default function LinkButton({title}) {
  return (
    <>
    <div className={styles['link-wrapper']}>
        <h5>{title}</h5>
        <div className={styles['link-btnShare']}>
        <ShareButton />

        </div>
    </div>
    </>
  )
}
