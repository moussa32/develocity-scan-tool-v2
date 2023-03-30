import styles from "./StepHeader.module.css";

const StepHeader = ({ subTitle, title }) => {
  return (
    <div className={styles.stepHeader}>
      <span className={styles.stepSubTitle}>{subTitle}</span>
      <h2 className={styles.stepTitle}>{title}</h2>
    </div>
  );
};

export default StepHeader;
