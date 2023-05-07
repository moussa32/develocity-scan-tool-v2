import React from "react";
import { NavBar } from "../../components/Home/Header/NavBar";
import CopyRight from "../../components/Home/CopyRight/CopyRight";
import ChangelogContent from "../../components/ChangelogContent/ChangelogContent";
import styles from "./Changelog.module.css";
import { socket } from "../../config/socket";
import { useEffect } from "react";

const Changelog = () => {
  useEffect(() => {
    socket.emit("currentLocation", { page: "changelog" });
    // return () => {
    //     socket.emit('leaveTokenPage', { contractAddress: tokenAddress });
    // }
  }, []);
  return (
    <div className={` ${styles.wholeBg}`}>
      <NavBar />

      <ChangelogContent />
      <div className={`container  ${styles.copyRight}`}>
        <CopyRight />
      </div>
    </div>
  );
};

export default Changelog;
