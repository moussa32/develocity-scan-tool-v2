import React from "react";
import { NavBar } from '../../components/Home/Header/NavBar';
import CopyRight from '../../components/Home/CopyRight/CopyRight';
import ChangelogContent from "../../components/ChangelogContent/ChangelogContent";
import styles from"./Changelog.module.css";



const Changelog =()=>{
    return(
        <div className={styles.wholeBg}>
        <NavBar />

<div className={styles.reAdv}>
<span>[ad space]</span>
</div>

<ChangelogContent/>

        <CopyRight />
        </div>
    )
}




export default Changelog;