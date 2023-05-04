import React from "react";
import { NavBar } from "../../components/Home/Header/NavBar";
import CopyRight from "../../components/Home/CopyRight/CopyRight";
import ChangelogContent from "../../components/ChangelogContent/ChangelogContent";
import styles from "./Changelog.module.css";
import { socket } from "../../config/socket";
import { useEffect } from "react";
import UseAdvertisment from "../../hooks/UseAdvertisment";
import { AdvertismentChangelog } from "../../components/Token/Advertise/AdvertismentChangelog";
const Changelog = () => {
  let { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment("News");

  useEffect(() => {
    socket.emit("currentLocation", { page: "changelog" });
    // return () => {
    //     socket.emit('leaveTokenPage', { contractAddress: tokenAddress });
    // }
  }, []);
  return (
    <div className={` ${styles.wholeBg}`}>
      <NavBar />
      {advertisment_Status === "success" && advertisment_code === 200 && (
        <div className={styles.reAdv}>
          <AdvertismentChangelog getAdvertismentData={getAdvertismentData} />
        </div>
      )}
      <ChangelogContent />
      <div className={`container  ${styles.copyRight}`}>
        <CopyRight />
      </div>
    </div>
  );
};

export default Changelog;
