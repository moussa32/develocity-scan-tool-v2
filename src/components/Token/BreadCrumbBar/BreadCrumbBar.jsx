import React from "react"
import styles from "./BreadCrumbBar.module.css"
import { AiOutlineUpload } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokenInfoResult } from '../../../Services/FetchTokenInfo';
import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";





const BreadCrumbBar = () => {

  const param = useParams()
  const contractAddress = param.contractAddress;
  const tokenData = useSelector(state => state.Gettokeninfodata.data);
  const { t, i18n } = useTranslation(["common"])
  const lang = localStorage.getItem("i18nextLng")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTokenInfoResult(contractAddress));

  }, [dispatch, contractAddress]);

  const tokeninfodata = tokenData.result;






  return (
    <div className="container">
      <div className={styles.breadCrumbBar}>
        <ul className={styles.breadCrumb}>
          <li>home</li>
          <li>scanner</li>
          <li>{tokeninfodata ? (tokeninfodata.contractInfo.name) : null}</li>
        </ul>
        <div className={styles.btns}>
          {/*<button>download report</button>*/}
          <button onClick={() => {
            if (navigator.share) {
              navigator.share({
                text: 'Check This Token',
                title: 'Develocity token report',
                url: window.location.href
              }).catch(console.error);
            } else {
              alert("Your Browser not Support this Service")
            }
          }}

          >share<AiOutlineUpload className={styles.shareIcon} /></button>
        </div>
      </div>



    </div>
  )

}


export default BreadCrumbBar