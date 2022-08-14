import React, { useState, useEffect } from "react";
import styles from "./SocialBar.module.css";
import { FaPaperPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const SocialBar = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng")
  const languages = [
    {
      code: 'en',
      dir: 'ltr'
    },
    {
      code: 'ar',
      dir: 'rtl'
    },
    {
      code: 'tr',
      dir: 'ltr'
    },
    {
      code: 'ch',
      dir: 'ltr'
    },
    {
      code: 'ru',
      dir: 'ltr'
    }
  ];
  const currentLanguage = languages.find((i) => i.code === lang)
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage('en');
    }
  }, [i18n, lang, language]);


  useEffect(() => {
    document.body.dir = currentLanguage.dir
  }, [currentLanguage])

  const handleOnclick = (e) => {
    // e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    document.body.dir = "ltr"
  }

  return (
    <div className={lang === "ar" ? styles.socialBarSection_rtl : styles.socialBarSection_ltr} style={{ backgroundColor: '#F3F2F7' }}>
      <div className="container">
        <div className={styles.socialBar}>

          <ul className={lang === "ar" ? styles.socialIcons_rtl : styles.socialIcons_ltr}>
            <li><a href="https://t.me/develocity"><FaPaperPlane /></a></li>
            <li><a href="https://twitter.com/deve_develocity"><FaTwitter /></a></li>
            {/* <li><a href="#"><FaFacebookF /></a></li> */}
          </ul>
          {/* start */}
          <ul className={styles.socialBarNav}>
            {/* <li><a href="#">{t("common:advertise")}</a></li>*/}
            <li><Link to="/Changelog">{t("common:changelog")}</Link></li>
            {/*<li><a href="#">{t("common:whitepaper")}</a></li> */}
            {/* <li className={`${styles.dropdown} nav-item dropdown`}>
  <button data-bs-toggle="dropdown" className={styles.dropbtn} value='en' onClick={handleOnclick}>english<IoIosArrowDown/></button>
  <ul  className="dropdown-menu">
    <li class="dropdown-item"><button href="#" value='ch' onClick={handleOnclick}>chinese</button></li>

    <li class="dropdown-item"> <button href="#" value='tr' onClick={handleOnclick}>turkish</button></li>
  
  </ul>
  </li> */}

            <li>


              <select className={styles.dropdown} onChange={handleOnclick} aria-label="Default select example">
                <option value="en" selected={lang === 'en'}> English</option>
                <option value="ar" selected={lang === 'ar'}> Arabic</option>
                <option value="ch" selected={lang === 'ch'}> Chinese</option> 
                <option value="ru" selected={lang === 'ru'}>Russian</option>
                <option value="tr" selected={lang === 'tr'}> Turkish</option> 
              </select>
            </li>
          </ul>
          {/* end */}


        </div>

      </div>
    </div>


  )
}

export default SocialBar

