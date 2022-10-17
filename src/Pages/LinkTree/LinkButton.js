import React from 'react'
import styles from './LinkTree.module.css'
export default function LinkButton({title}) {
  return (
    <>
    <div className={styles['link-wrapper']}>
        <span>{title}</span>
    </div>
    </>
  )
}
