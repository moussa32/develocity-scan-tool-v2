import styles from "./ContractAnalysis.module.css";
import { useSelector } from "react-redux";
import { Placeholder } from "../../common/Placeholder/Placeholder";
import { useTranslation } from "react-i18next";

export function ContractAnalysisCard() {
  const bscdata = useSelector(state => state.GetBSCdata.data);
  const bscstatus = useSelector(state => state.GetBSCdata.status);
  const { t } = useTranslation(["token"]);
  const lang = localStorage.getItem("i18nextLng");

  const newbscdata = bscdata.result;
  let data = [
    {
      name: t("token:mint"),
      value: newbscdata ? newbscdata.mint : null,
      // value:true
    },
    {
      name: t("token:burn"),
      value: newbscdata ? newbscdata.burn : null,
      // value:true
    },
    {
      name: t("token:reflection"),
      value: newbscdata ? newbscdata.reflection : null,
      // value:true
    },
    {
      name: t("token:self_distribution"),
      value: newbscdata ? newbscdata.selfdistruction : null,
      // value:false
    },
    {
      name: t("token:transfer_ownership"),
      value: newbscdata ? newbscdata.transferOwnership : null,
      // value:true
    },
    {
      name: t("token:anti_whale"),
      value: newbscdata ? newbscdata.antiWhale : null,
      // value:true
    },
    {
      name: t("token:antibot"),
      value: newbscdata ? newbscdata.antiBot : null,
      // value:false
    },
  ];

  return (
    <>
      {bscstatus === "success" && (
        <div style={{ width: "100%" }}>
          <h5 style={{ fontFamily: "SF Pro Display Medium" }}>{t("token:contract_analysis")}</h5>
          <div className={`align-self-center ${lang === "ar" ? styles.listGroup_rtl : styles.listGroup_ltr}`}>
            {data.map((item, index) => {
              return (
                <div key={index} className={`d-flex w-100 justify-content-between text-start ${styles.listItem}`}>
                  <p className={`${styles.indicatorName} align-items-center d-flex h-100`}>{item.name}:</p>
                  {item.value === true ? (
                    <span className={`${styles.indicatorStatus} ${styles.detected}`}>{t("token:detected")}</span>
                  ) : (
                    <span className={`${styles.indicatorStatus} ${styles.notdetected}`}>{t("token:not_detected")}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {bscstatus === "loading" && (
        <div style={{ width: "100%" }}>
          <h5 style={{ fontFamily: "SF Pro Display Medium" }} className={`text-start ${styles.contractAddress}`}>
            {t("token:contract_address")}
          </h5>
          <div className={`list-group align-self-center border-0  ${styles.listGroup} `}>
            {data.map((item, index) => {
              return (
                <div className="list-group-item rounded-0" key={index}>
                  <div className={` d-flex w-100 justify-content-between text-start ${styles.listitem}`}>
                    <div className="align-items-center d-flex h-100">
                      <Placeholder styling={{ width: "100px", height: "20px" }} />{" "}
                    </div>
                    <div className="align-items-center d-flex h-100 ">
                      {" "}
                      <Placeholder styling={{ width: "50px", height: "20px" }} />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {bscstatus === "failed" && ""}
    </>
  );
}
