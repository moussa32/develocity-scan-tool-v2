import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {IoCopy} from 'react-icons/io5';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from "./Search.module.css";
import { FaCircle } from "react-icons/fa";
import { BiBitcoin } from "react-icons/bi";
import { BsArrowRight, BsFillPatchCheckFill ,BsArrowLeft} from "react-icons/bs";
import { fetchResult } from "../../../Pages/DataFetch/FetchSearchData";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MySearch = () => {
  const { t } = useTranslation(["common"])
  const lang=localStorage.getItem("i18nextLng")

  const [term, setTerm] = useState(null);
  const [dataGet, setdataGet] = useState([]);
  const [disable, setDisable] = useState(true);
  const navigate=useNavigate()

  const search = useSelector((state) => state.Search);
  const [copiedAddress,setCopyAddress] = useState('Copy Address');
  const search_status = useSelector((state) => state.Search?.status);
  const searchCode = useSelector((state) => state.Search?.searchCode);

  const notify = () => (
    toast.error(' Invalid Contract Address!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  );
  
  const dispatch = useDispatch();
  //  console.log(search.status =="success" && search.data.payload)
  useEffect(() => {
    if (term != null) {
      dispatch(fetchResult(term));
    }
  }, [dispatch, term]);

  function copyToClipboard(contractAddress,event) {
    // event.preventDefault()
    event.stopPropagation();
    setCopyAddress('Copied Address !')
    navigator.clipboard.writeText(contractAddress)

    setTimeout(() => {
        setCopyAddress('Copy Address')
    }, 2000);
}

  useEffect(() => {
    if (term) {
      if (term.startsWith("0x") && term.length === 42) {
        setDisable(false);
      } else {
        const timeOut = setTimeout(() => {
          const myData = search.data.payload.result;
          const newMyData = myData.map((e) => ({
            name: e.contractInfo.name,
            symbol: e.contractInfo.symbol,
            logo: e.contractInfo.logo,
            interest: e.interest,
            listed: e.isNotListed,
            contractAddress: e.contractAddress,
            contractScan: e.contractScan,
          }));
          setdataGet(newMyData);
        }, 800);
        setDisable(true);
        return () => clearTimeout(timeOut);
      }
    } else {
      // setdataGet(null);
    }
  }, [search, term]);
  const searchContractaddress=()=>{
    console.log("searchCode: ", searchCode)
    // if( term.startsWith("0x") && term.length === 42 ){
    //   if(search_status==='success'){
    //     // window.location.href=`/token/${term}` 
    //     navigate(`/token/${term}`)
    //   }else{
    //     notify() 
    //   }
    // }else{
    //   window.location.href=`/`
    // }


    switch (searchCode) {
      case 200:
      case 404:  
        navigate(`/token/${term}`)
        break;
      case 400:
        notify() 
        break;

    }

  }
  return (
    <div className="w-100 ">
       <div>
            <ToastContainer position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
          </div>
      <span className={styles.searchNote}>
        <FaCircle className={lang==="ar"?styles.dot_rtl:styles.dot_ltr} />
       {t("common:enter_token")}
      </span>

      <div className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={(e) => setTerm(e.target.value)}
          // value={term}
          value={term===null?'':term}
        />
        <button onClick={searchContractaddress}
        
        // onClick={()=> {
        //    // eslint-disable-next-line no-unused-expressions
        //    (term.startsWith("0x") && term.length === 42) ? (search_status==='success'?window.location.href=`/token/${term}` :notify() ):(window.location.href=`/`)
        // }}
         className={lang==="ar"?styles.searchBtn_rtl:styles.searchBtn_ltr} disabled={disable}>
        {t("common:Scan")}
        </button>
      </div>
      {/* <div className={styles.searchNote2}>
        <span className={styles.note}>{t("common:sponsered")}</span>
        <span className={styles.note2}>
          <BiBitcoin className={lang==="ar"?styles.bitcoin_rtl:styles.bitcoin_ltr} />
          {t("common:invest")}
        </span>
      </div> */}
{/* className= {(search.status === "failed")? styles.searchNotFound:""} */}
        {searchCode == 200 && <div className= {(search.status === "failed" || search.status==='loading')? styles.searchBlock:""}>
          {search.status === "success" &&
            dataGet.length !==0 &&
            dataGet.map((el, index) => (
              <div className={styles.resultRecord} 
              key={index}
              onClick={(e) => {
                e.preventDefault();
                window.location.href=`/token/${el.contractAddress}`;
              }}
              >
                <div>
                  <div className={styles.titleBar}>
                    {el.logo ? (
                      <img src={el.logo} alt="logo" className={styles.logo} />
                    ) : (
                      //    create a new image with the first letter of the name token
                      <div className={styles.icon_token_letter}>
                        <h6 className={styles.icon_token_text}>
                          {el.name.charAt(0)}
                        </h6>
                      </div>
                    )}
                    {/* <img src={el.logo} alt="logo" className={styles.logo}/> */}
                    <h1>{el.name} </h1>

                    <span>
                      {el.symbol}{" "}
                      {el.listed ? (
                        <BsFillPatchCheckFill className={styles.checkIcon} />
                      ) : null}
                    </span>
                  </div>

                  <div className={styles.details}>
                    <div className={` ${styles.address}`}>
                   
                      { el.contractAddress.slice(0, 10)+'...'+el.contractAddress.slice(31, 41)}

                      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copiedAddress}</Tooltip>}>
                        <span onClick={(event) => {copyToClipboard(el.contractAddress, event)} } className="d-inline-block" title={el.contractAddress}>
                            <IoCopy disabled style={{color:'#888' ,marginLeft:'4px'}}/>    
                        </span>
                    </OverlayTrigger>
                      {/* <button>
                        <BiCopy />
                      </button> */}
                    </div>

                    {el.contractScan < 59 && (
                      <div className={styles.scanRed}>
                        Score:{Math.round(el.contractScan)}
                      </div>
                    )}

                    {el.contractScan > 59 && el.contractScan < 84 && (
                      <div className={styles.scanYellow}>
                        Score:{Math.round(el.contractScan)}
                      </div>
                    )}

                    {el.contractScan > 84 && (
                      <div className={styles.scanGreen}>
                        Score:{Math.round(el.contractScan)}
                      </div>
                    )}

                    <div className="">
                      {
                        (Math.round(el.contractScan))===0 &&(
                          <span className="isScam">Scam</span>
                        )
                      }
                      {/* {
                        isScam?<span className="isScam">Scam</span>:<span className="isNotScam">Scam</span>
                      } */}
                      
                    </div>
                  </div>
                </div>
                
                <button 
                     className={`${lang==='ar'? styles.arrowBtn_rtl:styles.arrowBtn_ltr}`}>
                      {lang==='ar'? <BsArrowLeft />: <BsArrowRight />}
                </button>
              </div>
            ))}
          {/* end of success */}

          {search.status === "loading" && <div>loading...</div>}
        </div>}

      </div>
  );
};

export default MySearch;
