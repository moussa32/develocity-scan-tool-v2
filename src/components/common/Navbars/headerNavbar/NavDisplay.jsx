// import { ButtonComponent } from '../../ButtonComponent'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./nav.module.css";
import logo from "../../../../assets/images/logo.png";

export function NavDisplay() {
  const { t } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng");
  // const logindata = {
  //     text: 'Log in',
  //     color: "black",
  //     bg: "#fff",
  //     border: '1px solid black',
  //     fontsize:'SF Pro Display Medium'
  // }
  // const registerdata = {
  //     text: 'Create Account',
  //     color: "white",
  //     bg: "#000",
  //     fontsize:'SF Pro Display Medium'
  // }
  return (
    <>
      <nav className={"navbar navbar-expand-lg "}>
        <div
          className={`container align-items-center ${styles.navbarHeaderContainer} ${
            lang === "ar" ?? styles.navbar_rtl
          }`}
        >
          <Link className="navbar-brand" to="/" style={{ zIndex: "10" }}>
            <img width="45" src={logo} alt="logo" />
          </Link>
          <button
            className={`navbar-toggler ${styles.navToggler} `}
            style={{ boxShadow: "none", zIndex: "10" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse text-center ${styles["navbar-collapse"]}`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav mb-2 d-inline-block  w-auto mb-lg-0 ${styles.listGroup}`}>
              <div className="d-lg-flex w-100 bg-ingo justify-content-between align-items-center">
                <div className={`d-lg-flex ${styles.navItemsContainer}`}>
                  <li className="nav-item">
                    <Link className={`nav-link ${styles.linkitem}`} aria-current="page" to="/">
                      {t("common:home")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.develocity.finance/#about"
                      className={`nav-link ${styles.linkitem}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("common:about")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${styles.linkitem}`} to="/tokens">
                      {t("common:tokens")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.linkitem}`}>Academy</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.develocity.finance/#contact" className={`nav-link ${styles.linkitem}`}>
                      {t("common:contact")}
                    </a>
                  </li>
                </div>
                {/*<div className="d-lg-flex me-3">
                                    <li className="nav-item">
                                        <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={logindata} />
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={registerdata} />
                                        </a>
                                    </li>
    </div>*/}
              </div>
            </ul>
            <div className={`${styles.headerActionButtonContainer} ms-auto`}>
              <Link className={`${styles.headerActionButton}`} to="/login">
                Log In
              </Link>
              <Link className={`${styles.headerActionButton} ${styles.activeHeaderActionButton}`} to="/create-account">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className=" container" style={{ marginTop: "-10px" }}>
        <hr className="dropdown-divider container" />
      </div>
    </>
  );
}
