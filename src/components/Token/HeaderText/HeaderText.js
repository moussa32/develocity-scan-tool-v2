import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import styles from "./HeaderText.module.css";

const HeaderText = ({ nameHeader, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className={lang === "ar" ? styles.container_header_right : styles.container_header_left}>
      <h2 className={styles.header}>{nameHeader} </h2>
      <Tooltip
        title={title}
        arrow
        open={showTooltip}
        onOpen={() => setShowTooltip(true)}
        onClose={() => setShowTooltip(false)}
      >
        <img
          className={lang === "ar" ? styles.InfoLogo_right : styles.InfoLogo_left}
          src={require("../../../assets/images/info.png")}
          alt="logo"
          onClick={() => setShowTooltip(!showTooltip)}
        />
      </Tooltip>
    </div>
  );
};

export default HeaderText;
