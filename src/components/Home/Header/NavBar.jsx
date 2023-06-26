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
  const isChangeLogPage = useMemo(() => (pathname.includes("Changelog") ? true : false), [pathname]);
  let { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment("News");

  return (
    <div className={`${!isHomePage ? styles.navbarBg : null}`}>
      <SocialBar />
      <NavDisplay />
      {isChangeLogPage && (
        <div className={styles.reAdv}>
            <div className={`justify-content-center align-items-center`}>
              <a href="https://develocity.finance">
                <img src="../930x180.gif" width={350} className={`${styles.secondAd}`}/>
              </a>
            </div>
        </div>
      )}
    </div>
  );
};

export { NavBar };
