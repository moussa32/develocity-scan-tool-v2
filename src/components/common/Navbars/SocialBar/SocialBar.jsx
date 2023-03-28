import { useEffect, useMemo, useCallback } from "react";
import { FaPaperPlane, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";
import styles from "./SocialBar.module.css";

const languages = [
  {
    code: "en",
    title: "English",
    dir: "ltr",
    countryFlag: "fi-gb",
  },
  {
    code: "ar",
    title: "Arabic",
    dir: "rtl",
    countryFlag: "fi-sa",
  },
  {
    code: "ch",
    title: "Chinese",
    dir: "ltr",
    countryFlag: "fi-cn",
  },
  {
    code: "ru",
    title: "Russian",
    dir: "ltr",
    countryFlag: "fi-ru",
  },
  {
    code: "tr",
    title: "Turkish",
    dir: "ltr",
    countryFlag: "fi-tr",
  },
  {
    code: "es",
    title: "Español",
    dir: "ltr",
    countryFlag: "fi-es",
  },
];

const SocialBar = () => {
  const { t, i18n } = useTranslation(["common"]);
  const lang = i18n.resolvedLanguage;
  const direction = i18n.dir();

  let currentLanguage = useMemo(() => languages.find(i => i.code.includes(lang)), [lang]);

  const getCurrentLanguageDisplayName = useCallback(
    languageCode => {
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
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir;
    } else {
      document.body.dir = "rtl";
    }
  }, [currentLanguage]);

  const handleChangeLanguage = selectedLanguage => {
    i18n.changeLanguage(selectedLanguage.code);
    document.body.dir = selectedLanguage.dir;
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
                  className={`dropdown-menu p-0 border-0 list-unstyled ${styles.dropdownLang} ${
                    lang === "ar" ? styles.langListGroup_rtl : styles.langListGroup_ltr
                  }`}
                >
                  {languages.map(language => (
                    <li
                      key={language.countryFlag}
                      role="button"
                      className={`${styles.dropdownLangItem} d-flex justify-content-between"`}
                      onClick={() => handleChangeLanguage(language)}
                    >
                      <button
                        className={`dropdown-item ${styles.dropdownLangButton} ${
                          direction === "rtl" ? styles.dropdownLangButton_rtl : null
                        }`}
                        value={language.code}
                      >
                        <span data-lang={language.code}>{language.title}</span>
                        <span className={`fi ${language.countryFlag}`}></span>
                      </button>
                    </li>
                  ))}
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
