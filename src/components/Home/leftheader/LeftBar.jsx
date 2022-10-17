import React from "react";
// import {ButtonComponent} from '../../common/ButtonComponent'
import styles from './leftbar.module.css'
import { useTranslation } from 'react-i18next';
import googlePlay from '../../../assets/images/googlePlay.png';
import appStore from '../../../assets/images/appStore.png'
export function LeftBar(){
    const {t}=useTranslation(['home'])
    // const buttondata={
    //     text:'See how it works',
    //     color:"white",
    //     bg:"#9F4AE8"
    // }
    return (
        <>
            <section className="mt-5 ">
                <div className=" ">
                <span className="py-2 px-3" style={{color:'#9F4AE8',fontSize:'12px',backgroundColor:'rgba(159, 74, 232,0.2)',borderRadius:'2px',paddingTop:'59px'}}>{t("home:BETA_STAGE")}</span>
                <h4 className={` ${styles.epiloguefont}`} >
                    {t("home:Become_a_PRO_in_Crypto_Investments")}
                </h4>
                <p className={styles.parag}>
                    {t("home:We_are_excited_to_share_our_Beta_version_of_the_Develocity_Multifunctional_tool_that_works_on_BSC")}
                </p>
                {/* <a className={styles.linkitemopcity} style={{marginTop:'27px',display:'block'}}>
                <ButtonComponent data={buttondata}/>
                </a> */}
                </div>
            </section>
        </>
    )
}