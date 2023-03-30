import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { AiOutlineClose } from "react-icons/ai";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { BsCheck } from "react-icons/bs";

import TokenDetails from "./Steps/TokenDetails";
import StepHeader from "./StepHeader";
import UploadLogo from "./Steps/UploadLogo";
import Success from "./Steps/Success";
import Bio from "./Steps/Bio";
import styles from "./SubmitToken.module.css";

import { IoIosArrowBack } from "react-icons/io";
import SocialMedia from "./Steps/SocialMedia";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50%)",
    right: "calc(50%)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#9F4AE8",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#9F4AE8",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#9F4AE8",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#fff",
    background: "#9F4AE8",
    zIndex: 1,
    fontSize: 18,
    borderRadius: "50%",
  },
  "& .QontoStepIcon-circle": {
    width: 16,
    height: 16,
    zIndex: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

const SubmitToken = ({ showModal, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Token Details", "Logo", "Short Bio", "Social Media"];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    handleClose();
    setTimeout(() => {
      setActiveStep(0);
    }, 200);
  };

  const renderStepContent = step => {
    switch (step) {
      case 0:
        return (
          <>
            <StepHeader subTitle="Submit your token" title="Details about your token" />
            <TokenDetails />
          </>
        );
      case 1:
        return (
          <>
            <StepHeader subTitle="Submit your token" title="Upload logo for token" />
            <UploadLogo />
          </>
        );
      case 2:
        return (
          <>
            <StepHeader subTitle="Submit your token" title="Tell us about your token" />
            <Bio />
          </>
        );
      case 3:
        return (
          <>
            <StepHeader subTitle="Submit your token" title="Where to find your token" />
            <SocialMedia />
          </>
        );
      case 4:
        return <Success handleReset={handleReset} />;

      default:
        return null;
    }
  };

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? <BsCheck className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
      </QontoStepIconRoot>
    );
  }

  return (
    <>
      <Modal
        dialogClassName={styles.customDialog}
        contentClassName={styles.modalContent}
        show={showModal}
        onHide={handleClose}
        className="p-0"
        centered
      >
        <button className={styles.closeButton} onClick={handleReset}>
          Close <AiOutlineClose size={10} />
        </button>
        <Modal.Body className="p-0">
          {activeStep !== 4 && (
            <Stepper className={styles.stepper} activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
          <div className={styles.stepContainer}>{renderStepContent(activeStep)}</div>
          {activeStep < 4 && (
            <>
              <div className="d-flex justify-content-between gap-2">
                {activeStep !== 0 && (
                  <button className={`${styles.stepButton} ${styles.stepBackButton}`} onClick={handleBack}>
                    <IoIosArrowBack className={styles.stepBackIcon} />
                    <span className={styles.stepBackText}>Back</span>
                  </button>
                )}
                <button className={`${styles.stepButton} ${styles.stepNextButton}`} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : <>Next Step</>}
                </button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SubmitToken;
