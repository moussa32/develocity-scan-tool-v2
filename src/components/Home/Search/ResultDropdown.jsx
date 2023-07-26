import { memo } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./ResultDropdown.module.css";
import BSCLogo from "../../../assets/images/BSC.png";

const ResultDropdown = ({ contractAddress, logo, name, symbol, contractScan, isScam }) => {
  const handleClickOnResult = event => {
    event.preventDefault();
    window.location.href = `/token/${contractAddress}`;
  };
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className={styles.resultRecord} onClick={handleClickOnResult}>
      <div className={styles.resultRecordWrapper}>
        {logo ? (
          <img src={logo} alt="logo" className={styles.logo} />
        ) : (
          //create a new image with the first letter of the name token
          <div className={styles.icon_token_letter}>
            <h6 className={styles.icon_token_text}>{name.charAt(0)}</h6>
          </div>
        )}
        <div className={styles.details}>
          <div className={styles.headerTitle}>
            <h2 className={styles.resultTokenName}>{name}</h2>
            <span className={styles.resultTokenTicker}>{symbol}</span>
          </div>
          <div className={styles.resultTokenDetails}>
            <div className={styles.address}>{contractAddress.slice(0, 8) + "..." + contractAddress.slice(31, 41)}</div>

            {contractScan < 59 && (
              <div className={`${styles.scanCard} ${styles.scanRed}`}>Score:{Math.round(contractScan)}</div>
            )}

            {contractScan > 59 && contractScan < 84 && (
              <div className={`${styles.scanCard} ${styles.scanYellow}`}>Score:{Math.round(contractScan)}</div>
            )}

            {contractScan > 84 && (
              <div className={`${styles.scanCard} ${styles.scanGreen}`}>Score:{Math.round(contractScan)}</div>
            )}

            <div className={styles.network}>
              <img className={styles.networkLogo} src={BSCLogo} alt="" title="" />
              <span className={styles.networkName}>BSC</span>
            </div>
          </div>
        </div>
      </div>

      <button className={`${lang === "ar" ? styles.arrowBtn_rtl : styles.arrowBtn_ltr}`}>
        {lang === "ar" ? <BsArrowLeft /> : <BsArrowRight />}
      </button>
    </div>
  );
};

export default memo(ResultDropdown);
