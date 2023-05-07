import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import NavDisplay from "../../common/Navbars/headerNavbar/NavDisplay";
import SocialBar from "../../common/Navbars/SocialBar/SocialBar";
import styles from "./Navbar.module.css";
import UseAdvertisment from "../../../hooks/UseAdvertisment";
import { AdvertismentChangelog } from "../../../components/Token/Advertise/AdvertismentChangelog";

const NavBar = () => {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => (pathname === "/" ? true : false), [pathname]);
  let { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment("News");

  return (
    <div className={`${!isHomePage ? styles.navbarBg : null}`}>
      <SocialBar />
      <NavDisplay />
      <div className={styles.reAdv}>
        {advertisment_Status === "success" && advertisment_code === 200 && (
          <AdvertismentChangelog getAdvertismentData={getAdvertismentData} />
        )}
      </div>
    </div>
  );
};

export { NavBar };
