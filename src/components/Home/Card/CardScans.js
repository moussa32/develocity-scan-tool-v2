import React from "react";
import styles from "./CardScans.module.css";
import Header from "./Header";
import RowScans from "./RowScans";
import { Placeholder } from "../../common/Placeholder/Placeholder";
// import logo from "../../../assets/images/tron.png";

const CardScans = ({ popularScans, title, caption }) => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <Header titleofscore={title} caption={caption} />
        {popularScans.length > 0 ? (
          popularScans.map((item, index) => {
            // console.log(item.contractInfo.name,item.contractAddress,'=****===>');
            return (
              <div key={index}>
                {item?.contractInfo && Object.keys(item.contractInfo).length !== 0 && (
                  <>
                    <RowScans
                      // key={index}
                      isVerifyed={item.isNotListed}
                      number={index + 1}
                      image={item.contractInfo.logo}
                      nametoken={item.contractInfo.name}
                      score={parseInt(item.contractScan)}
                      scan={caption === "Scans" ? parseInt(item.interest) : (item?.updatedAt).toString()}
                      scam={parseInt(item.contractScan.toFixed(0))}
                      contract={item.contractAddress}
                      sponsored="fales"
                      caption={caption}
                    />
                  </>
                )}
              </div>
            );
          })
        ) : (
          <>
            {[1, 2, 3, 4, 5].map((i, index) => (
              <div className={`row `} key={index}>
                <div className={`col-7 `}>
                  <Placeholder styling={{ width: "150px", height: "20px", padding: "15px" }} />
                </div>
                <div className={`col-5`}>
                  <div className="row w-100 px-0">
                    <div className={`col-7 `}>
                      {caption && <Placeholder styling={{ width: "50px", height: "20px", padding: "15px" }} />}
                    </div>
                    <div className={`col-5  `}>
                      <Placeholder styling={{ width: "50px", height: "20px", padding: "15px" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CardScans;
