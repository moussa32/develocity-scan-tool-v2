import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaPaperPlane, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";
import styles from "./SocialBar.module.css";

const SocialBar = () => {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng");
  const languages = [
    {
      code: "en",
      dir: "ltr",
    },
    {
      code: "ar",
      dir: "rtl",
    },
    {
      code: "tr",
      dir: "ltr",
    },
    {
      code: "ch",
      dir: "ltr",
    },
    {
      code: "ru",
      dir: "ltr",
    },
    {
      code: "es",
      dir: "ltr",
    },
  ];

  let currentLanguage = useMemo(() => languages.find(i => i.code === lang), []);

  const getCurrentLanguageDisplayName = useCallback(
    languageCode => {
      console.log(languageCode);
      if (currentLanguage) {
        const languageDisplayName = new Intl.DisplayNames(
          [currentLanguage.code === "ch" ? "zh-Hant" : currentLanguage.code],
          { type: "language" }
        );
        return languageDisplayName.of(languageCode === "ch" ? "zh-Hant" : languageCode);
      }
    },
    [currentLanguage]
  );

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, [i18n, lang, language]);

  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir;
    } else {
      document.body.dir = "rtl";
    }
  }, [currentLanguage]);

  const handleOnclick = e => {
    e.preventDefault();
    setLanguage(e.target.parentNode.value);
    i18n.changeLanguage(e.target.parentNode.value);
    document.body.dir = "ltr";
  };

  return (
    <div className={lang === "ar" ? styles.socialBarSection_rtl : styles.socialBarSection_ltr}>
      <div className="container">
        <div className={styles.socialBar}>
          <ul className={lang === "ar" ? styles.socialIcons_rtl : styles.socialIcons_ltr}>
            <li>
              <a href="https://t.me/develocity">
                <FaPaperPlane />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/deve_develocity">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
          </ul>
          {/* start */}
          <ul className={styles.socialBarNav}>
            <li>
              <a href="#">{t("common:advertise")}</a>
            </li>
            <li>
              <Link to="/Changelog">{t("common:changelog")}</Link>
            </li>
            <li>
              <a href="#">{t("common:whitepaper")}</a>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className={`btn border-0 p-0 text-secondary ${styles.langIcon_ltr} ${styles.langIcon}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {getCurrentLanguageDisplayName(currentLanguage.code)}
                  <MdOutlineKeyboardArrowDown size={23} />
                </button>
                <ul
                  className={`dropdown-menu ${styles.dropdownLang} ${
                    lang === "ar" ? styles.langListGroup_rtl : styles.langListGroup_ltr
                  }`}
                >
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="en" onClick={handleOnclick}>
                      <span data-lang="en">English</span>
                      <span className="fi fi-gb "></span>
                    </button>
                  </li>
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="ar" onClick={handleOnclick}>
                      <span data-lang="ar">Arabic</span>
                      <span className="fi fi-sa "></span>
                    </button>
                  </li>
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="ch" onClick={handleOnclick}>
                      <span>Chinese</span>
                      <span className="fi fi-cn "></span>
                    </button>
                  </li>
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="ru" onClick={handleOnclick}>
                      <span>Russian</span>
                      <span className="fi fi-ru "></span>
                    </button>
                  </li>
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="tr" onClick={handleOnclick}>
                      <span>Turkish</span>
                      <span className="fi fi-tr "></span>
                    </button>
                  </li>
                  <li role="button" className="d-flex justify-content-between">
                    <button className="dropdown-item" value="es" onClick={handleOnclick}>
                      <span>Español</span>
                      <span className="fi fi-es "></span>
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
