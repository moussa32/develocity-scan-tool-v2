import React from "react";
import styles from "./CardScans.module.css";
import Header from "./Header";
import RowScans from "./RowScans";
import { Placeholder } from "../../common/Placeholder/Placeholder";
// import logo from "../../../assets/images/tron.png";

const CardScans = ({ popularScans, title ,caption}) => {

  // console.log("popularScans",popularScans)
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <Header titleofscore={title} caption={caption}/>
        {popularScans.length > 0
          ? popularScans.map((item, index) => {
            // console.log(item.contractInfo.name,item.contractAddress,'=****===>');
            return (
              (item?.contractInfo  && Object.keys(item.contractInfo).length !== 0) && <>
              <RowScans
                key={index}
                number={index + 1}
                image={item.contractInfo.logo}
                nametoken={item.contractInfo.name}
                score={ parseInt(item.contractScan)}
                scan={caption==='Scans'? parseInt((item.interest)) : ((item?.updatedAt).toString())}
                scam={parseInt((item.contractScan).toFixed(0))}
                contract={item.contractAddress}
                sponsored="fales"
                title={title}
                caption={caption}
              />
               </>
            )
          }

          )
          : <>
            {[1, 2, 3, 4, 5].map((i, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center">
                <Placeholder styling={{ width: '150px', height: '20px', padding: '15px' }} />
                <Placeholder styling={{ width: '30px', height: '20px', padding: '15px' }} />
              </div>
            ))}


          </>}
      </div>
    </div>
  );
};

export default CardScans;
