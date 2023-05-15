import styles from "./ErrorPart.module.css";
import { BiErrorCircle } from "react-icons/bi";

const ErrorPart = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <BiErrorCircle size={32} />
      {message}
    </div>
  );
};

export default ErrorPart;
