import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { fetchResult } from "../../../store/FetchSearchData";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Search.module.css";
import { BiBitcoin } from "react-icons/bi";
import ResultDropdown from "./ResultDropdown";

const MySearch = () => {
  const { t } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng");
  const [term, setTerm] = useState(null);
  const [dataGet, setdataGet] = useState([]);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const search = useSelector(state => state.Search);
  const [copiedAddress, setCopyAddress] = useState("Copy Address");
  const search_status = useSelector(state => state.Search?.status);
  const searchCode = useSelector(state => state.Search?.searchCode);

  const notify = () =>
    toast.error(" Invalid Contract Address!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();
  //  console.log(search.status =="success" && search.data.payload)
  useEffect(() => {
    if (term != null) {
      dispatch(fetchResult(term));
    }
  }, [dispatch, term]);

  function copyToClipboard(contractAddress, event) {
    // event.preventDefault()
    event.stopPropagation();
    setCopyAddress("Copied Address !");
    navigator.clipboard.writeText(contractAddress);

    setTimeout(() => {
      setCopyAddress("Copy Address");
    }, 2000);
  }

  useEffect(() => {
    if (term) {
      if (term.startsWith("0x") && term.length === 42) {
        setDisable(false);
      } else {
        const timeOut = setTimeout(() => {
          const myData = search.data.payload.result;
          console.log(myData);
          const newMyData = myData.map(e => ({
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
  const searchContractaddress = () => {
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
        navigate(`/token/${term}`);
        break;
      case 400:
        notify();
        break;
      default:
        navigate("/");
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <span className={styles.searchNote}>
        <FaCircle className={`${styles.dot} ${lang === "ar" ? styles.dot_rtl : styles.dot_ltr}`} />
        {t("common:enter_token")}
      </span>

      <div className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={e => setTerm(e.target.value)}
          // value={term}
          value={term === null ? "" : term}
        />
        <button
          onClick={searchContractaddress}
          // onClick={()=> {
          //    // eslint-disable-next-line no-unused-expressions
          //    (term.startsWith("0x") && term.length === 42) ? (search_status==='success'?window.location.href=`/token/${term}` :notify() ):(window.location.href=`/`)
          // }}
          className={`${styles.searchBtn} ${lang === "ar" ? styles.searchBtn_rtl : styles.searchBtn_ltr}`}
          disabled={disable}
        >
          {t("common:Scan")}
        </button>
        {searchCode === 200 && (
          <div className={dataGet.length !== 0 ? styles.searchBlock : null}>
            {/* <div className= {(search.status === "failed" || search.status==='loading')? styles.searchBlock:""}>  */}
            {search.status === "success" &&
              dataGet.length !== 0 &&
              dataGet.map((resultElement, index) => (
                <>
                  {/* {console.log(resultElement)} */}
                  <ResultDropdown
                    key={index}
                    contractAddress={resultElement.contractAddress}
                    logo={resultElement.logo}
                    name={resultElement.name}
                    listed={resultElement.listed}
                    symbol={resultElement.symbol}
                    contractScan={resultElement.contractScan}
                  />
                </>
              ))}
            {/* end of success */}
            {search.status === "loading" && <div>loading...</div>}
          </div>
        )}
      </div>
      <div className={styles.searchNote2}>
        <span className={styles.note}>{t("common:sponsered")}</span>
        <span className={styles.note2}>
          <BiBitcoin className={lang === "ar" ? styles.bitcoin_rtl : styles.bitcoin_ltr} />
          {t("common:invest")}
        </span>
      </div>
      {/* className= {(search.status === "failed")? styles.searchNotFound:""} */}
    </>
  );
};

export default MySearch;
