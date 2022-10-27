import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListNewsdata } from './../../Services/FetchListNews';
import styles from "./ChangelogContent.module.css";
import { Placeholder } from "../common/Placeholder/Placeholder";
import logo from '../../assets/images/emptypng.png'

const ChangelogContent = () => {
  const listnewdata = useSelector(state => state.GetListNewsdata.data)
  const bscstatus = useSelector(state => state.GetListNewsdata.status);
  const [category, setCategory] = useState('All')
  const { t } = useTranslation(["changelog"]);
  const lang = localStorage.getItem("i18nextLng")

  const changecategory = (e) => {
    // e.preventDefault();
    setCategory(e.target.value);

  }



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListNewsdata(category));

  }, [category, dispatch]);



  return (
    <Fragment>
      {/*tabs */}
      <div className="container mt-5">
        <ul className={` ${styles.changelogTabs} nav nav-pills mb-3  `} id="pills-tab" role="tablist">
          <li className={`${styles.tabLink}  nav-item`} role="presentation">
            <button
              onClick={changecategory} value="All"
              className={`${category === "All" && styles.btnAll} ${styles.navLink} nav-link `} type="button" role="tab" aria-controls="pills-all" aria-selected="true">{t("changelog:view")}</button>
          </li>
          <li className={`${styles.tabLink}  nav-item`} role="presentation">
            <button
              onClick={changecategory} value="Announcement"
              className={`${category === "Announcement" && styles.btnAnnounce} ${styles.navLink} nav-link`} type="button" role="tab" aria-controls="pills-announcement" aria-selected="false">{t("changelog:announce")}</button>
          </li>
          <li className={`${styles.tabLink}  nav-item`} role="presentation">
            <button
              onClick={changecategory} value="Bug Fix"
              className={`${category === "Bug Fix" && styles.btnBug} ${styles.navLink} nav-link`} type="button" role="tab" aria-controls="pills-bugFix" aria-selected="false">{t("changelog:bug")}</button>
          </li>
          <li className={`${styles.tabLink}  nav-item`} role="presentation">
            <button
              onClick={changecategory} value="Product"
              className={`${category === "Product" && styles.btnProduct} ${styles.navLink} nav-link`} type="button" role="tab" aria-controls="pills-tabProduct" aria-selected="false">{t("changelog:product")}</button>
          </li>
          <li className={`${styles.tabLink}  nav-item`} role="presentation">
            <button
              onClick={changecategory} value="Company"
              className={`${category === "Company" && styles.btnCompany} ${styles.navLink} nav-link`} type="button" role="tab" aria-controls="pills-tabCompany" aria-selected="false">{t("changelog:company")}</button>
          </li>
        </ul>
        <div className={` ${styles.tabContent} tab-content`} id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
            {/* start */}
            {bscstatus === 'success' &&
              <>
                {listnewdata &&
                  listnewdata.map((el, index) => (
                    <div key={index} className={` ${styles.step} 
                          ${el.category === 'announcement' && styles.announce} 
                          ${el.category === 'product' && styles.product}  
                          ${el.category === 'company' && styles.company}  
                          ${el.category === 'bug fix' && styles.bug}
                    `}>
                      {el.news.length > 0 ? <>
                        {el.news.map(((ele, index) => (<section className={` ${styles.wrapper}`} key={index}>

                          <div className={` ${styles.typeBlock}`}>
                            <div className={lang === "ar" ? styles.typeDate_rtl : styles.typeDate_ltr}>
                              <h1 className={`${el.category === "announcement" && styles.typeAnnounce}
                                  ${el.category === "product" && styles.typeProduct}
                                  ${el.category === "bug fix" && styles.typeBug}
                                  ${el.category === "company" && styles.typeCompany}`}>
                                {el.category === "announcement" && t("changelog:announce")}
                                {el.category === "product" && t("changelog:product")}
                                {el.category === "bug fix" && t("changelog:bug")}
                                {el.category === "company" && t("changelog:company")}
                              </h1>
                              <p className={styles.date}>{ele.createdAt.split("T")[0]}</p>
                              <p className={styles.date}>{(ele.createdAt.split("T")[1]).split(".")[0]}</p>
                            </div>
                          </div>
                          {el.news.length !== 0 ? <div className={styles.vStepper}>
                            <div className={styles.circle}></div>
                            <div className={styles.line}></div>
                          </div> : null}
                          <div className={lang === "ar" ? styles.content_rtl : styles.content_ltr}>

                            <div className={styles.details}>
                              <h2 className={styles.title}>{ele.title}</h2>
                              <p >{ele.description}. </p>

                            </div>


                          </div>
                        </section>

                        ))

                        )

                        }
                      </> : <>{(category !== 'All') ? <>
                        <img src={logo} alt="empty" width={100} />
                        <h2>no news</h2></> : null}
                      </>}



                    </div>
                  ))
                }
              </>}

            {bscstatus === 'loading' && <><Placeholder styling={{ width: '250px', height: '200px' }} /></>}



            {/* end */}



          </div>




        </div>
      </div>


      {/* end tabs */}
    </Fragment>

  )
}


export default ChangelogContent;


