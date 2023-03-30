import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./TokenDetails.module.css";
import Form from "react-bootstrap/Form";

const TokenDetails = () => {
  return (
    <form>
      <input className={`${styles.formInput} ${styles.contractInput}`} placeholder="Contract Address" />
      <div className={styles.fieldsContainer}>
        <div className={`${styles.field}`}>
          <label className={styles.inputLabel} htmlFor="name">
            Name
          </label>
          <input className={`${styles.formInput} ${styles.secondaryInput}`} id="name" />
        </div>
        <div className={`${styles.field}`}>
          <label className={styles.inputLabel} htmlFor="CurrentPrice">
            Current Price
          </label>
          <input className={`${styles.formInput} ${styles.secondaryInput}`} id="CurrentPrice" />
        </div>
        <div className={`${styles.field}`}>
          <label className={styles.inputLabel} htmlFor="Symbol">
            Symbol
          </label>
          <input className={`${styles.formInput} ${styles.secondaryInput}`} id="Symbol" />
        </div>
        <div className={`${styles.field}`}>
          <label className={styles.inputLabel} htmlFor="Network">
            Network
          </label>
          <input className={`${styles.formInput} ${styles.secondaryInput}`} id="Network" />
        </div>
        <div className={`${styles.field}`}>
          <label className={styles.inputLabel} htmlFor="tokenAudited">
            Is token audited?
          </label>
          <Form.Select
            className={`${styles.formInput} ${styles.secondaryInput} ${styles.selectInput}`}
            aria-label="Default select example"
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </Form.Select>
          <input className={`${styles.formInput}`} id="tokenAudited" />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              disableRipple={true}
              sx={{
                color: "#9F4AE8",
                padding: 0,
                width: 16,
                height: 16,
                marginRight: "11px",
                "&.Mui-checked": {
                  color: "#9F4AE8",
                },
              }}
            />
          }
          sx={{
            margin: "26px 0 32px 0",
            ".MuiFormControlLabel-label": {
              all: "unset",
              fontFamily: "SF Pro Display",
              fontSize: "14px",
              color: "#888888",
            },
          }}
          label={
            <>
              By enter your token information you agree on Develocity's{" "}
              <a style={{ textDecoration: "none", color: "#9F4AE8", fontSize: 14 }} href="/" target="_blank">
                Terms & Conditions
              </a>
            </>
          }
        />
      </div>
    </form>
  );
};

export default TokenDetails;
