import React, { Fragment, useState ,useEffect} from "react";
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {fetchListNewsdata} from './../../Services/FetchListNews';
import styles from "./ChangelogContent.module.css";



const ChangelogContent =() =>{
  const listnewdata = useSelector(state => state.GetListNewsdata.data)
  const bscstatus = useSelector(state => state.GetListNewsdata.status);
  const [category, setCategory]=useState('All')
  const { t } = useTranslation(["changelog"]);
  const lang = localStorage.getItem("i18nextLng")

  const changecategory=(e)=>{
    e.preventDefault();
    setCategory(e.target.value);
    console.log(listnewdata)

  }

  const dispatch = useDispatch ();
  useEffect(()=>{
      dispatch (fetchListNewsdata (category));
  },[category, dispatch]);



  return(
    <Fragment>
    {/*tabs */}
<div className="container">
<ul className={` ${styles.changelogTabs} nav nav-pills mb-3  `} id="pills-tab" role="tablist">
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button 
    onClick={changecategory} value="All"
    className={`${styles.all} ${styles.navLink} nav-link active`}   type="button" role="tab" aria-controls="pills-all" aria-selected="true">{t("changelog:view")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button
    onClick={changecategory}  value="Announcement"
    className={`${styles.announcement} ${styles.navLink} nav-link`}  type="button" role="tab" aria-controls="pills-announcement" aria-selected="false">{t("changelog:announce")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
    <button
     onClick={changecategory} value="Bug Fix"
    className={`${styles.bugFix} ${styles.navLink} nav-link`}  type="button" role="tab" aria-controls="pills-bugFix" aria-selected="false">{t("changelog:bug")}</button>
  </li>
  <li className={`${styles.tabLink}  nav-item`} role="presentation">
  <button 
  onClick={changecategory} value="Product"
  className={`${styles.tabProduct} ${styles.navLink} nav-link`}  type="button" role="tab" aria-controls="pills-tabProduct" aria-selected="false">{t("changelog:product")}</button>
</li>
<li className={`${styles.tabLink}  nav-item`} role="presentation">
<button 
onClick={changecategory} value="Company"
className={`${styles.tabCompany} ${styles.navLink} nav-link`}  type="button" role="tab" aria-controls="pills-tabCompany" aria-selected="false">{t("changelog:company")}</button>
</li>
</ul>
<div className={`${styles.tabContent} tab-content`} id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
  
  {/* start */}

    {listnewdata &&
     listnewdata.map( (el)=> (
      <div className={`${styles.step} ${el.category=='announcement' && styles.announce  } 
       ${el.category=='product' && styles.product  }  
       ${el.category=='company' && styles.company  }  
       ${el.category=='bug fix' && styles.bug  }
      `}>
        {el.news.map( (ele=>(
           <div className={styles.typeBlock}>
           <div className={lang=="ar"?lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_rtl:lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_ltr}>
           <h1 className={styles.typeAnnounce}>All</h1>
           <p className={styles.date}>{ele.createdAt}</p>
           </div>
           </div>
  
        )))}
   
    <div className={styles.vStepper}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
    </div>

    <div className={lang=="ar"?styles.content_rtl:styles.content_ltr}>
      {el.news.map ( (ele=>(
        <>
        <h2 className={styles.title}>{ele.title}</h2>
        <p>{ele.description}. </p>
        
        </>
      )) )}
      
    </div>
  </div>
     ) )
     }

  {/* end */}
  
  {/* <div className={`${styles.step} ${styles.announce}`}>
    <div className={styles.typeBlock}>
    <div className={lang=="ar"?lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_rtl:lang=="ar"?styles.typeDate_rtl:styles.typeDate_ltr_ltr}>
    <h1 className={styles.typeAnnounce}>All</h1>
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
</div> */}

  </div>




</div>
</div>


{/* end tabs */}
</Fragment>

  )
}


export default ChangelogContent;

