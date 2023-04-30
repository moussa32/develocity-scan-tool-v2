import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SpacialNumber = ({ numbersAfterZero, zeroCounts, parsedNumber }) => {
  return (
    <>
      <OverlayTrigger placement="top" overlay={<Tooltip>{Number(parsedNumber).toFixed(10)}</Tooltip>}>
        <p className="mb-0">
          0.0
          <sub>{zeroCounts}</sub>
          {numbersAfterZero}
        </p>
      </OverlayTrigger>
    </>
  );
};

export default SpacialNumber;
