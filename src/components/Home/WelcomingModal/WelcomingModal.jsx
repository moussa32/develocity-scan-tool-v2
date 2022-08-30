import React, { useState ,useEffect} from "react";
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import styles from './WelcomingModal.module.css'

export function WelcomingModal(){
    const {t}=useTranslation(['common'])
    // const [isOpen,setIsOpen]=useState(false)
    let isOpen=localStorage.getItem('isOpen')||true
    const lang=localStorage.getItem("i18nextLng")

    // useEffect( ()=>{
    //    if(!isLogin){
    //     setIsOpen(true)
    //    }

    // },[isLogin] )

    function hideNotification(){
        // setIsOpen(false)
        console.log("mmmmmmmmmm")
        localStorage.setItem("isOpen",false)
    }
    return (
      
            <>
            {
                ReactDOM.createPortal(
                    <>
                    {
                        !isOpen &&
                        <>
                        <div className={styles.backDrop}/>
                        <div className={` ${styles.overlay}`}>
                        <button className={lang==="ar"?styles.closeBtn_rtl:styles.closeBtn_ltr} onClick={hideNotification}>{t("common:close")}</button>
                            <div >{t("common:welcoming_notification")}</div>
                        </div>
                        </>
                    }
              
                    </>,
                    document.getElementById('welcoming-modal')
                  
                )
              }
               
            </>
        
      
    
    ) 
}

