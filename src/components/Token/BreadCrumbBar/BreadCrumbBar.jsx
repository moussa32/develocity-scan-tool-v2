import React from "react";
import styles from "./BreadCrumbBar.module.css";
import { AiOutlineUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const BreadCrumbBar = () => {
  const tokenData = useSelector(state => state.Gettokeninfodata.data);
  const { t } = useTranslation(["token"]);
  const lang = localStorage.getItem("i18nextLng");

  const tokeninfodata = tokenData.result;

  return (
    <div className="container">
      <div className={styles.breadCrumbBar}>
        <ul className={lang === "ar" ? styles.breadCrumb_rtl : styles.breadCrumb_ltr}>
          <li>{t("token:home")}</li>
          <li>{t("token:scanner")}</li>
          <li>{tokeninfodata ? tokeninfodata.contractInfo.name : null}</li>
        </ul>
        <div className={styles.btns}>
          {/*<button>download report</button>*/}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    text: "Check This Token",
                    title: "Develocity token report",
                    url: window.location.href,
                  })
                  .catch(console.error);
              } else {
                alert("Your Browser not Support this Service");
              }
            }}
          >
            {t("token:Share")}
            <AiOutlineUpload className={lang === "ar" ? styles.shareIcon_rtl : styles.shareIcon_ltr} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbBar;
