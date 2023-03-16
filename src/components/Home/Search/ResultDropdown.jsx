import { memo } from "react";
import styles from "./ResultDropdown.module.css";

const ResultDropdown = ({ contractAddress, logo, name, symbol, listed, contractScan }) => {
  const handleClickOnResult = event => {
    event.preventDefault();
    window.location.href = `/token/${contractAddress}`;
  };

  return (
    <div className={styles.resultRecord} onClick={handleClickOnResult}>
      <div className="w-100 h-100">
        <div className={styles.titleBar}>
          <div className="d-flex align-items-center">
            {logo ? (
              <img src={logo} alt="logo" className={styles.logo} />
            ) : (
              //create a new image with the first letter of the name token
              <div className={styles.icon_token_letter}>
                <h6 className={styles.icon_token_text}>{name.charAt(0)}</h6>
              </div>
            )}
            {/* <img src={logo} alt="logo" className={styles.logo}/> */}
            <div className={styles.headerTitle}>
              <h2>{name}</h2>
              <span>{symbol}</span>
            </div>
          </div>
          <div className={styles.scan}>
            {contractScan < 59 && <div className={styles.scanRed}>{Math.round(contractScan)}</div>}

            {contractScan > 59 && contractScan < 84 && (
              <div className={styles.scanYellow}>{Math.round(contractScan)}</div>
            )}

            {contractScan > 84 && <div className={styles.scanGreen}>{Math.round(contractScan)}</div>}
          </div>
        </div>

        <div className={styles.details}>
          {/* <div className={` ${styles.address}`}>
     
        { contractAddress.slice(0, 10)+'...'+contractAddress.slice(31, 41)}

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copiedAddress}</Tooltip>}>
          <span onClick={(event) => {copyToClipboard(contractAddress, event)} } className="d-inline-block" title={contractAddress}>
              <IoCopy disabled style={{color:'#888' ,marginLeft:'4px'}}/>    
          </span>
      </OverlayTrigger>
      </div> */}

          <div>
            {/* {
          isScam?<span className="isScam">Scam</span>:<span className="isNotScam">Scam</span>
        } */}
          </div>
        </div>
      </div>

      {/* <button
    className={`${lang === 'ar' ? styles.arrowBtn_rtl : styles.arrowBtn_ltr}`}>
    {lang === 'ar' ? <BsArrowLeft /> : <BsArrowRight />}
  </button> */}
    </div>
  );
};

export default memo(ResultDropdown);
