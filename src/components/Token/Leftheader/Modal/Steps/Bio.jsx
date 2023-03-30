import styles from "./Bio.module.css";

const Bio = () => {
  return (
    <>
      <textarea placeholder="Token Bio" className={styles.textArea} />
      <p className={styles.maximumMessage}>Maximum 500 Characters</p>
    </>
  );
};

export default Bio;
