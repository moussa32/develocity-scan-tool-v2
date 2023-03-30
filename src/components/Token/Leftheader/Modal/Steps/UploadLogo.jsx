import { useTranslation } from "react-i18next";
import styles from "./UploadLogo.module.css";
import { ReactComponent as UploadIcon } from "../../../../../assets/uploadIcon.svg";
import { ReactComponent as UploadRing } from "../../../../../assets/uploadRing.svg";

const UploadLogo = () => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.uploadBtn}>
          <input className={styles.uploadInput} type="file" />
          <UploadIcon />
          <UploadRing className={styles.ring} />
          <br />
          {t("common:browse")}
        </button>
      </div>
      <p className={styles.uploadText}>{t("common:logo_condition")}</p>
    </>
  );
};

export default UploadLogo;
