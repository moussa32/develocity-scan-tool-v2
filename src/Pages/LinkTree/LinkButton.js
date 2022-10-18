import React from 'react'
import styles from './LinkTree.module.css'
import ShareIcon from './ShareIcon'
export default function LinkButton({ title ,shareNavigator, titleofshare,textofshare,url}) {
  return (
    <>
      <div className={styles['link-wrapper']}>
        <h5>{title}</h5>
        <div>
          <button className={styles['link-btnShare']} 
          onClick={()=>shareNavigator(textofshare,titleofshare,url)}
          >
            <ShareIcon color='#fff' />
          </button>
        </div>
      </div>
    </>
  )
}
