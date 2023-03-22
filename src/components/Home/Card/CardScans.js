import React from "react";
import { memo } from "react";
import styles from "./CardScans.module.css";
import CardScansLoader from "./CardScansLoader";
import Header from "./Header";
import RowScans from "./RowScans";
// import logo from "../../../assets/images/tron.png";

const CardScans = ({ popularScans, caption }) => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <Header caption={caption} />
        {popularScans.length > 0 ? (
          popularScans.map((item, index) => {
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
                      price={item.price}
                    />
                  </>
                )}
              </div>
            );
          })
        ) : (
          <CardScansLoader caption={caption} />
        )}
      </div>
    </div>
  );
};

export default memo(CardScans);
