import styles from "./CardScans.module.css";
import { useTranslation } from "react-i18next";

const Header = ({ caption }) => {
  const { t } = useTranslation(["home"]);
  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`row ${styles.header_title}`}>
      {/* <div className={styles.header_title}> */}
      <div className={`col-9 ${styles.sub_header}`}>
        <h3 className={styles.header_number}>#</h3>
        <h3 className={lang === "ar" ? styles.header_number_right : styles.header_number_left}>{t("home:token")} </h3>
      </div>
      <div className={`col-3 ${styles.header_values}`}>
        {caption && <h3 className={`${styles.header_scans}`}>{caption}</h3>}
      </div>
    </div>
  );
};

export default Header;
