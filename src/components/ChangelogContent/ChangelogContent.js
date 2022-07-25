import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./ChangelogContent.module.css";


const ChangelogContent =() =>{
  const { t, i18n } = useTranslation(["changelog"]);
  const lang = localStorage.getItem("i18nextLng")
  return(
    <Fragment>
    {/*tabs */}
<div className="container">
<ul className={` ${styles.changelogTabs} nav nav-pills mb-3  `} id="pills-tab" role="tablist">
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button className={`${styles.all} ${styles.navLink} nav-link active`}   id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">{t("changelog:view")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button className={`${styles.announcement} ${styles.navLink} nav-link`} id="pills-announcement-tab" data-bs-toggle="pill" data-bs-target="#pills-announcement" type="button" role="tab" aria-controls="pills-announcement" aria-selected="false">{t("changelog:announce")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button className={`${styles.bugFix} ${styles.navLink} nav-link`} id="pills-bugFix-tab" data-bs-toggle="pill" data-bs-target="#pills-bugFix" type="button" role="tab" aria-controls="pills-bugFix" aria-selected="false">{t("changelog:bug")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
  <button className={`${styles.tabProduct} ${styles.navLink} nav-link`} id="pills-tabProduct-tab" data-bs-toggle="pill" data-bs-target="#pills-tabProduct" type="button" role="tab" aria-controls="pills-tabProduct" aria-selected="false">{t("changelog:product")}</button>
</li>
<li className={`${styles.tabLink}  nav-item`} role="presentation">
<button className={`${styles.tabCompany} ${styles.navLink} nav-link`} id="pills-tabCompany-tab" data-bs-toggle="pill" data-bs-target="#pills-tabCompany" type="button" role="tab" aria-controls="pills-tabCompany" aria-selected="false">{t("changelog:company")}</button>
</li>
</ul>
<div className={`${styles.tabContent} tab-content`} id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
  <div className={`${styles.step} ${styles.announce}`}>
  <div className={styles.typeBlock}>
  <div className={lang=="ar"?lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_rtl:lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_ltr}>
  <h1 className={styles.typeAnnounce}>announcement</h1>
  <p className={styles.date}>8 JULY, 2022</p>
  </div>
  </div>
  <div className={styles.vStepper}>
    <div className={styles.circle}></div>
    <div className={styles.line}></div>
  </div>

  <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
  <h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
  </div>
</div>


<div className={`${styles.step} ${styles.product}`}>
<div className={styles.typeBlock}>
<div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
<h1 className={styles.typeProduct}>product</h1>
<p className={styles.date}>8 JULY, 2022</p>
</div>
</div>
<div className={styles.vStepper}>
  <div className={styles.circle}></div>
  <div className={styles.line}></div>
</div>

<div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
<h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  </p>
</div>
</div>


<div className={`${styles.step} ${styles.bug}`}>
<div className={styles.typeBlock}>
<div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
<h1 className={styles.typeBug}>bug fix</h1>
<p className={styles.date}>8 JULY, 2022</p>
</div>
</div>
  <div className={styles.vStepper}>
    <div className={styles.circle}></div>
    <div className={styles.line}></div>
  </div>

  <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
  <h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
  </div>
</div>


<div className={`${styles.step} ${styles.company}`}>
<div className={styles.typeBlock}>
<div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
<h1 className={styles.typeCompany}>company</h1>
<p className={styles.date}>8 JULY, 2022</p>
</div>
</div>
  <div className={styles.vStepper}>
    <div className={styles.circle}></div>
    <div className={styles.line}></div>
  </div>

  <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
  <h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
  </div>
</div>

  </div>
  <div className="tab-pane fade" id="pills-announcement" role="tabpanel" aria-labelledby="pills-announcement-tab">
  <div className={`${styles.step} ${styles.announce}`}>
  <div className={styles.typeBlock}>
  <div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
  <h1 className={styles.typeAnnounce}>announcement</h1>
  <p className={styles.date}>8 JULY, 2022</p>
  </div>
  </div>
  <div className={styles.vStepper}>
    <div className={styles.circle}></div>
    <div className={styles.line}></div>
  </div>

  <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
  <h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
  </div>
</div>
</div>
  <div className="tab-pane fade" id="pills-bugFix" role="tabpanel" aria-labelledby="pills-bugFix-tab">
  <div className={`${styles.step} ${styles.announce}`}>
  <div className={styles.typeBlock}>
  <div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
  <h1 className={styles.typeAnnounce}>announcement</h1>
  <p className={styles.date}>8 JULY, 2022</p>
  </div>
  </div>
  <div className={styles.vStepper}>
    <div className={styles.circle}></div>
    <div className={styles.line}></div>
  </div>

  <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
  <h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
  </div>
</div>
</div>

<div className="tab-pane fade" id="pills-tabProduct" role="tabpanel" aria-labelledby="pills-tabProduct-tab">
<div className={`${styles.step} ${styles.announce}`}>
<div className={styles.typeBlock}>
<div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
<h1 className={styles.typeAnnounce}>announcement</h1>
<p className={styles.date}>8 JULY, 2022</p>
</div>
</div>
<div className={styles.vStepper}>
  <div className={styles.circle}></div>
  <div className={styles.line}></div>
</div>

<div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
<h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  </p>
</div>
</div>
</div>

<div className="tab-pane fade" id="pills-tabCompany" role="tabpanel" aria-labelledby="pills-tabCompany-tab">
<div className={`${styles.step} ${styles.announce}`}>
<div className={styles.typeBlock}>
<div className={lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr}>
<h1 className={styles.typeAnnounce}>announcement</h1>
<p className={styles.date}>8 JULY, 2022</p>
</div>
</div>
<div className={styles.vStepper}>
  <div className={styles.circle}></div>
  <div className={styles.line}></div>
</div>

<div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
<h2 className={styles.title}>Whitepaper Got Updated - Go Read!</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  </p>
</div>
</div>
</div>


</div>
</div>


{/* end tabs */}
</Fragment>

  )
}


export default ChangelogContent;

