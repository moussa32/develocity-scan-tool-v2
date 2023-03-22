import { Placeholder } from "../../common/Placeholder/Placeholder";

const CardScansLoader = ({ caption }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i, index) => (
        <div className={`row `} key={index}>
          <div className={`col-7 `}>
            <Placeholder styling={{ width: "150px", height: "20px", padding: "15px" }} />
          </div>
          <div className={`col-5`}>
            <div className="row w-100 px-0">
              <div className={`col-7 `}>
                {caption && <Placeholder styling={{ width: "50px", height: "20px", padding: "15px" }} />}
              </div>
              <div className={`col-5  `}>
                <Placeholder styling={{ width: "50px", height: "20px", padding: "15px" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardScansLoader;
