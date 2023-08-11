import styles from "./Sponsored.module.css";
import { useTranslation } from "react-i18next";

const Sponsored = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className={styles.searchNote2}>
      <span className={styles.note}>{t("common:sponsered")}</span>
      <a className={styles.note2} href="https://develocity.finance">
        <img src="../../logo.png" className={direction === "rtl" ? styles.bitcoin_rtl : styles.bitcoin_ltr} />
        {t("common:invest")}
      </a>
    </div>
  );
};

export default Sponsored;
