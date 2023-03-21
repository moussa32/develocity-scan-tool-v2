import styles from "./LeftBarToken.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenInfoResult } from "../../../store/FetchTokenInfo";
import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Modal } from "./Modal/Modal";
import ModalForm from "../ModalForm/ModalForm";
import { useTranslation } from "react-i18next";
import { IconContainer } from "./IconsContainer/IconContainer";
import VerificationIcon from "../../../assets/images/verification.png";
import LeftBarLoader from "./LeftBarLoader";
import { TbDiscountCheckFilled } from "react-icons/tb";

export function LeftBarToken() {
  const { contractAddress } = useParams();
  const tokenData = useSelector(state => state.Gettokeninfodata.data);
  const tokenstatus = useSelector(state => state.Gettokeninfodata.status);
  const score = useSelector(state => state.Score.data);
  const bscdata = useSelector(state => state.GetBSCdata.data);
  const bscstatus = useSelector(state => state.GetBSCdata.status);
  const [copiedAddress, setCopyAddress] = useState("Copy Address");
  const [showModal, setShowModal] = useState(false);

  const scoreData = score.result;
  const newbscdata = bscdata.result;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTokenInfoResult(contractAddress));
  }, [contractAddress, dispatch]);

  const { t } = useTranslation(["token"]);
  const tokeninfodata = tokenData.result;
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

  return (
    <>
      {tokenstatus === "success" && (
        <>
          <ModalForm show={showModal} close={() => setShowModal(false)} />
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="py-2 ">
                <span className="">
                  {tokeninfodata && tokeninfodata.contractInfo.logo ? (
                    <img
                      className={styles.tokenImg}
                      src={tokeninfodata.contractInfo.logo}
                      alt={tokeninfodata.contractInfo}
                    />
                  ) : (
                    <div className="d-inline-block ">
                      <div className={`${styles.icon_token_letter1}`}>
                        <h6 className={`${styles.icon_token_text1} `}>
                          {tokeninfodata ? tokeninfodata.contractInfo.name.charAt(0) : null}
                        </h6>
                      </div>
                    </div>
                  )}
                </span>

                <span className={`${styles.name} `}>{tokeninfodata ? tokeninfodata.contractInfo.name : null}</span>
                <span className={`ms-2 px-2 me-2 py-1 ${styles.symbol}`}>
                  {tokeninfodata ? tokeninfodata.contractInfo.symbol : null}
                </span>
                {tokeninfodata.isNotListed && <img src={VerificationIcon} width={18} alt="verfiyed" />}
                {scoreData?.contractScan === 0 && <span className={`py-1 px-2 me-2 ${styles.isScam}`}>Scam</span>}

                <span className="ms-2">
                  {tokeninfodata && tokeninfodata.isNotListed ? (
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
              </div>
              <div className=" py-2 me-0">
                <IconContainer tokeninfodata={tokeninfodata && tokeninfodata} />
              </div>
            </div>

            <div className={`d-flex justify-content-between align-items-center`}>
              <span className={`text-muted pe-2 ${styles.contractaddress}`}>{t("token:contract_address")} </span>
              <div>
                <span
                  value={contractAddress}
                  className={`text-primary pb-1 ms-2 ${styles.contractaddress} ${styles.copiedaddress}`}
                  style={{ fontFamily: "SF Pro Display Medium" }}
                >
                  {contractAddress ? `${contractAddress.slice(0, 10)}...${contractAddress.slice(-10)}` : ""}
                </span>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copiedAddress}</Tooltip>}>
                  <span onClick={copyToClipboard} className="d-inline-block">
                    <IoCopy disabled style={{ color: "#888", marginLeft: "4px" }} />
                  </span>
                </OverlayTrigger>
              </div>
            </div>

            <div className={styles.contractInfo}>
              <span
                className="me-2 px-2 py-1  mt-2 w-auto d-inline-block"
                style={{ backgroundColor: "rgba(136, 136, 136,0.2)", height: "29px" }}
              >
                {tokeninfodata && tokeninfodata.contractInfo.logo ? (
                  <img
                    className={`rounded-circle`}
                    width={18}
                    src={tokeninfodata.contractInfo.logo}
                    alt={tokeninfodata.contractInfo}
                    style={{ marginTop: "-2px" }}
                  />
                ) : (
                  <div className="d-inline-block">
                    <div className={styles.icon_token_letter2}>
                      <h6 className={styles.icon_token_text2}>
                        {tokeninfodata ? tokeninfodata.contractInfo.name.charAt(0) : null}
                      </h6>
                    </div>
                  </div>
                )}

                <span style={{ fontFamily: "SF Pro Display Medium" }} className="ps-1">
                  {tokeninfodata ? tokeninfodata?.contractInfo?.symbol : null}
                </span>
              </span>
              <span
                className="px-2 py-1 me-2 mt-2 d-inline-block"
                style={{ backgroundColor: "rgba(136, 136, 136,0.2)" }}
              >
                {t("token:total_scans")} {tokeninfodata ? tokeninfodata?.interest : null}
              </span>
              <span
                className="px-2 py-1 me-2 mt-2 d-inline-block"
                style={{ backgroundColor: "rgba(136, 136, 136,0.2)", fontFamily: "SF Pro Display Medium" }}
              >
                {t("token:launched")} {tokeninfodata ? (tokeninfodata?.contractInfo?.age.split("T"))[0] : null}
              </span>
              <span
                className="px-2 py-1 mt-2 me-2 d-inline-block"
                style={{ backgroundColor: "rgba(136, 136, 136,0.2)" }}
              >
                {t("token:added")} {tokeninfodata ? (tokeninfodata?.createdAt.split("T"))[0] : null}
              </span>
              {bscstatus === "success" && newbscdata?.sourceCode && (
                <span
                  className="px-2 py-1 mt-2 me-2 d-inline-block"
                  style={{ backgroundColor: "rgba(136, 136, 136,0.2)" }}
                >
                  {newbscdata?.sourceCode === "VERIFED"
                    ? t("token:tokenType.verified")
                    : t("token:tokenType.notVerified")}
                </span>
              )}
              {tokeninfodata?.contractInfo?.description && (
                <>
                  <Modal
                    logo={tokeninfodata?.contractInfo?.logo}
                    name={tokeninfodata?.contractInfo?.name}
                    description={tokeninfodata?.contractInfo?.description}
                    symbol={tokeninfodata?.contractInfo?.symbol}
                    isnotlisted={tokeninfodata?.isNotListed}
                  />
                </>
              )}
            </div>

            <div className={`d-flex justify-content-between flex-wrap mt-4 mb-4 ${styles.percent}`}>
              <div className="">
                <h5 className="text-muted ">{t("token:current_price")}</h5>
                <p className="mb-2">
                  {lang === "ar" ? (
                    <>{tokeninfodata ? tokeninfodata.contractInfo.tokenPriceUSD : null}$</>
                  ) : (
                    <>${tokeninfodata ? tokeninfodata.contractInfo.tokenPriceUSD : null}</>
                  )}
                </p>
              </div>
              <div className="">
                <h5 className="text-muted ">{t("token:market_cap")}</h5>
                <p className="fs-5 mb-2">
                  {lang === "ar" ? (
                    <>{tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.market_cap) : null}$</>
                  ) : (
                    <>${tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.market_cap) : null}</>
                  )}
                </p>
              </div>
              <div className="">
                <h5 className="text-muted ">{t("token:total_supply")}</h5>
                <p className="fs-5 mb-2">
                  {lang === "ar" ? (
                    <>
                      {tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.total_supply) : null}
                      <span className="pe-1"></span>
                      {tokeninfodata ? tokeninfodata.contractInfo.symbol : null}
                    </>
                  ) : (
                    <>
                      {tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.total_supply) : null}{" "}
                      {tokeninfodata ? tokeninfodata.contractInfo.symbol : null}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {tokenstatus === "loading" && <LeftBarLoader lang={lang} />}
    </>
  );
}
