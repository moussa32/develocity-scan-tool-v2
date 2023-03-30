import styles from "./Success.module.css";
import { ReactComponent as SuccessSubmitToken } from "../../../../../assets/successSubmitIcon.svg";

const Success = ({ handleReset }) => {
  return (
    <div className={styles.successWrapper}>
      <SuccessSubmitToken className={styles.successIcon} />
      <h2 className={styles.successTitle}>Thanks!</h2>
      <div className={styles.successMessage}>
        <p>It's under the review now.</p>
        <p>You'll receive email once it's approved.</p>
      </div>

      <button className={styles.reset} onClick={handleReset}>
        Return to Website
      </button>
    </div>
  );
};

export default Success;
