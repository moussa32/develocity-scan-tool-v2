import { LeftBar } from "../../leftheader/LeftBar";
import MySearch from "../../Search/MySearch";
import styles from "./section1.module.css";

export function Section1() {
  return (
    <>
      <div className={`d-flex container justify-content-between ${styles.Section1Container}`}>
        <div className="col-xs-12 col-md-7">
          <LeftBar />
        </div>
        <div className={`${styles.mySearch}`}>
          <MySearch />
        </div>
      </div>
    </>
  );
}
