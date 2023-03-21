import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import NavDisplay from "../../common/Navbars/headerNavbar/NavDisplay";
import SocialBar from "../../common/Navbars/SocialBar/SocialBar";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => (pathname === "/" ? true : false), [pathname]);

  return (
    <div className={`${!isHomePage ? styles.navbarBg : null}`}>
      <SocialBar />
      <NavDisplay />
    </div>
  );
};

export { NavBar };
