import { SpinnerRoundFilled } from "spinners-react";

const PageLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <SpinnerRoundFilled color={"#000"} />
    </div>
  );
};

export default PageLoader;
