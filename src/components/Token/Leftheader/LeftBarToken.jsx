import styles from "./LeftBarToken.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Modal } from "./Modal/Modal";
// import ModalForm from "../ModalForm/ModalForm";
import { useTranslation } from "react-i18next";
import { IconContainer } from "./IconsContainer/IconContainer";
import VerificationIcon from "../../../assets/images/verification.png";
import LeftBarLoader from "./LeftBarLoader";
import { TbDiscountCheckFilled } from "react-icons/tb";
import icon from "../../../assets/images/popup.png";

export function LeftBarToken() {
  const { contractAddress } = useParams();
  const tokenData = useSelector(state => state.Gettokeninfodata.data);
  const tokenStatus = useSelector(state => state.Gettokeninfodata.status);
  const score = useSelector(state => state.Score.data);
  const bscdata = useSelector(state => state.GetBSCdata.data);
  const bscstatus = useSelector(state => state.GetBSCdata.status);
  const [copiedAddress, setCopyAddress] = useState("Copy Address");
  const [showModal, setShowModal] = useState(false);

  const scoreData = score.result;
  const newbscdata = bscdata.result;

  const { t } = useTranslation(["token"]);
  const tokenInfoData = tokenData.result;
  const lang = localStorage.getItem("i18nextLng");

  function foramtNumber(val) {
    return Number(val).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  function copyToClipboard(e) {
    setCopyAddress("Copied Address !");
    navigator.clipboard.writeText(contractAddress);

    let resetCopyAddressText = setTimeout(() => {
      setCopyAddress("Copy Address");
      clearTimeout(resetCopyAddressText);
    }, 2000);
  }

  if (tokenStatus === "loading" || !tokenStatus) return <LeftBarLoader lang={lang} />;
  if (tokenStatus === "failed") return <div>Error Happened we couldn't get token info</div>;

  return (
    <section style={{ display: "flex", gap: "12px" }}>
      {/* <ModalForm show={showModal} close={() => setShowModal(false)} /> */}
      {tokenInfoData.contractInfo.logo ? (
        <img className={styles.tokenImg} src={tokenInfoData.contractInfo.logo} alt={tokenInfoData.contractInfo} />
      ) : (
        <div className="d-inline-block">
          <div className={`${styles.icon_token_letter1}`}>
            <h6 className={`${styles.icon_token_text1} `}>
              {tokenInfoData ? tokenInfoData.contractInfo.name.charAt(0) : null}
            </h6>
          </div>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className={styles.name}>{tokenInfoData ? tokenInfoData.contractInfo.name : null}</h1>
          <span className={`ms-2 px-2 me-2 py-1 ${styles.symbol}`}>
            {tokenInfoData ? tokenInfoData.contractInfo.symbol : null}
          </span>
          {tokenInfoData?.isNotListed && <img src={VerificationIcon} width={18} alt="verfiyed" />}
          {scoreData?.contractScan === 0 && <span className={`py-1 px-2 me-2 ${styles.isScam}`}>Scam</span>}

          <span className="ms-2">
            {tokenInfoData && tokenInfoData.isNotListed ? (
              <>
                <TbDiscountCheckFilled color="#9F4AE8" size={25} />

                <span className=" me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#9F4AE8"
                    className="bi bi-patch-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </span>
              </>
            ) : (
              <span className={`${styles.modalIcon} me-3`} onClick={() => setShowModal(true)}>
                <TbDiscountCheckFilled color="#707070" size={18} />
              </span>
            )}
          </span>

          <IconContainer tokenInfoData={tokenInfoData} />
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-wrap">
            <span className={styles.contractaddress}>{t("token:contract_address")}:</span>
            <div>
              <span
                value={contractAddress}
                className={`text-primary ${styles.contractaddress} ${styles.copiedaddress}`}
              >
                {contractAddress}
              </span>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copiedAddress}</Tooltip>}>
                <span onClick={copyToClipboard} className="d-inline-block">
                  <IoCopy disabled style={{ color: "#888", marginLeft: "4px" }} />
                </span>
              </OverlayTrigger>
            </div>
          </div>

          <div className={styles.contractInfo}>
            <span className={styles.contractInfoItem}>
              {tokenInfoData && tokenInfoData.contractInfo.logo ? (
                <img
                  className={`rounded-circle`}
                  width={16}
                  src={tokenInfoData.contractInfo.logo}
                  alt={tokenInfoData.contractInfo}
                />
              ) : (
                <div className="d-inline-block">
                  <div className={styles.icon_token_letter2}>
                    <h6 className={styles.icon_token_text2}>
                      {tokenInfoData ? tokenInfoData.contractInfo.name.charAt(0) : null}
                    </h6>
                  </div>
                </div>
              )}

              <span className="ps-1">{tokenInfoData ? tokenInfoData?.contractInfo?.symbol : null}</span>
            </span>
            <span className={styles.contractInfoItem}>
              {t("token:total_scans")} {tokenInfoData ? tokenInfoData?.interest : null}
            </span>
            <span className={styles.contractInfoItem}>
              {t("token:launched")} {tokenInfoData ? (tokenInfoData?.contractInfo?.age.split("T"))[0] : null}
            </span>
            <span className={styles.contractInfoItem}>
              {t("token:added")} {tokenInfoData ? (tokenInfoData?.createdAt.split("T"))[0] : null}
            </span>
            {bscstatus === "success" && newbscdata?.sourceCode && (
              <span className={styles.contractInfoItem}>
                {newbscdata?.sourceCode === "VERIFED"
                  ? t("token:tokenType.verified")
                  : t("token:tokenType.notVerified")}
              </span>
            )}
            {tokenInfoData?.contractInfo?.description && (
              <>
                <span
                  className={styles.contractInfoItem}
                  style={{
                    cursor: "pointer",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#ViewMore"
                >
                  {t("token:view_more")} <img src={icon} height="10" width="10" alt="view more" />
                </span>
                <Modal
                  logo={tokenInfoData?.contractInfo?.logo}
                  name={tokenInfoData?.contractInfo?.name}
                  description={tokenInfoData?.contractInfo?.description}
                  symbol={tokenInfoData?.contractInfo?.symbol}
                  isnotlisted={tokenInfoData?.isNotListed}
                />
              </>
            )}
          </div>
        </div>
        <div className={`d-flex justify-content-between flex-wrap mt-4 mb-4 ${styles.percent}`}>
          <div className="">
            <h5 className="text-muted ">{t("token:current_price")}</h5>
            <p className="mb-2">
              {lang === "ar" ? (
                <>{tokenInfoData ? tokenInfoData.contractInfo.tokenPriceUSD : null}$</>
              ) : (
                <>${tokenInfoData ? tokenInfoData.contractInfo.tokenPriceUSD : null}</>
              )}
            </p>
          </div>
          <div className="">
            <h5 className="text-muted ">{t("token:market_cap")}</h5>
            <p className="fs-5 mb-2">
              {lang === "ar" ? (
                <>{tokenInfoData ? foramtNumber(tokenInfoData.contractInfo.market_cap) : null}$</>
              ) : (
                <>${tokenInfoData ? foramtNumber(tokenInfoData.contractInfo.market_cap) : null}</>
              )}
            </p>
          </div>
          <div className="">
            <h5 className="text-muted ">{t("token:total_supply")}</h5>
            <p className="fs-5 mb-2">
              {lang === "ar" ? (
                <>
                  {tokenInfoData ? foramtNumber(tokenInfoData.contractInfo.total_supply) : null}
                  <span className="pe-1"></span>
                  {tokenInfoData ? tokenInfoData.contractInfo.symbol : null}
                </>
              ) : (
                <>
                  {tokenInfoData ? foramtNumber(tokenInfoData.contractInfo.total_supply) : null}{" "}
                  {tokenInfoData ? tokenInfoData.contractInfo.symbol : null}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
