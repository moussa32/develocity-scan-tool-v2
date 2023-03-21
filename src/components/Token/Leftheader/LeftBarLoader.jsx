import { Placeholder } from "../../common/Placeholder/Placeholder";
import styles from "./LeftBarToken.module.css";

const LeftBarLoader = ({ lang }) => {
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="py-2 d-flex align-items-center">
          <Placeholder styling={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "8px" }} />
          <Placeholder styling={{ width: "50px", height: "20px", marginRight: "8px" }} />
          <Placeholder styling={{ width: "50px", height: "20px", marginRight: "8px" }} />
          <Placeholder styling={{ width: "50px", height: "20px", marginRight: "8px" }} />
        </div>

        <div className="d-flex py-2 me-0">
          <Placeholder styling={{ width: "24px", height: "24px", marginRight: "8px", borderRadius: "50%" }} />
          <Placeholder styling={{ width: "24px", height: "24px", marginRight: "8px", borderRadius: "50%" }} />
          <Placeholder styling={{ width: "24px", height: "24px", marginRight: "8px", borderRadius: "50%" }} />
        </div>
      </div>

      <div className={`d-flex justify-content-between flex-wrap`}>
        <Placeholder styling={{ width: "120px", height: "20px" }} />
        <Placeholder styling={{ width: "120px", height: "20px" }} />
      </div>

      <div className="d-flex flex-wrap ">
        {lang === "ar" ? (
          <>
            {[1, 1, 1, 1].map((item, index) => (
              <Placeholder styling={{ width: "100px", height: "20px", marginLeft: "8px" }} key={index} />
            ))}
          </>
        ) : (
          <>
            {[1, 1, 1, 1].map((item, index) => (
              <Placeholder key={index} styling={{ width: "100px", height: "20px", marginRight: "8px" }} />
            ))}
          </>
        )}
      </div>

      <div className={`d-flex justify-content-between flex-wrap mt-4 mb-4 ${styles.percent}`}>
        <div>
          <Placeholder styling={{ width: "100px", height: "20px" }} />
          <Placeholder styling={{ width: "100px", height: "20px" }} />
        </div>
        <div>
          <Placeholder styling={{ width: "100px", height: "20px" }} />
          <Placeholder styling={{ width: "100px", height: "20px" }} />
        </div>
        <div>
          <Placeholder styling={{ width: "100px", height: "20px" }} />
          <Placeholder styling={{ width: "100px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default LeftBarLoader;
