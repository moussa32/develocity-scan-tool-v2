import React from "react";
import { NavBar } from '../../components/Home/Header/NavBar';
import CopyRight from '../../components/Home/CopyRight/CopyRight';
import ChangelogContent from "../../components/ChangelogContent/ChangelogContent";
import styles from"./Changelog.module.css";
import {socket} from '../../utils/socket';
import { useEffect } from 'react';


const Changelog =()=>{
    useEffect(() => {
        socket.emit('currentLocation', {page:'changelog'});
        // return () => {
        //     socket.emit('leaveTokenPage', { contractAddress: tokenAddress });
        // }
    }, []);
    return(
        <div className={` ${styles.wholeBg}`}>
        <NavBar />

{/* <div className={styles.reAdv} >
<span>[ad space]</span>
</div> */}

<ChangelogContent/>
        <div className={`container  ${styles.copyRight}`}>
        <CopyRight />

        </div>
        
        </div>
    )
}




export default Changelog;