import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { fetchResult } from "../../../store/FetchSearchData";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Search.module.css";
import ResultDropdown from "./ResultDropdown";

const MySearch = () => {
  const { t } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng");
  const [query, setQuery] = useState(null);
  const [dataGet, setdataGet] = useState([]);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const search = useSelector(state => state.Search);
  const search_status = useSelector(state => state.Search?.status);
  const searchCode = useSelector(state => state.Search?.searchCode);

  const notify = () =>
    toast.error("Invalid Contract Address!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();
  useEffect(() => {
    if (query != null) {
      dispatch(fetchResult(query));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (query) {
      if (query.startsWith("0x") && query.length === 42) {
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
  }, [search, query]);

  const searchContractaddress = () => {
    // if( query.startsWith("0x") && query.length === 42 ){
    //   if(search_status==='success'){
    //     // window.location.href=`/token/${query}`
    //     navigate(`/token/${query}`)
    //   }else{
    //     notify()
    //   }
    // }else{
    //   window.location.href=`/`
    // }

    if (!disable) {
      navigate(`/token/${query}`);
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
          onChange={e => setQuery(e.target.value)}
          value={query === null ? "" : query}
        />
        <button
          onClick={searchContractaddress}
          // onClick={()=> {
          //    // eslint-disable-next-line no-unused-expressions
          //    (query.startsWith("0x") && query.length === 42) ? (search_status==='success'?window.location.href=`/token/${query}` :notify() ):(window.location.href=`/`)
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
                    symbol={resultElement.symbol}
                    contractScan={resultElement.contractScan}
                    isScam={resultElement.listed}
                  />
                </>
              ))}
            {/* end of success */}
            {search.status === "loading" && <div>loading...</div>}
          </div>
        )}
      </div>
      {/* <div className={styles.searchNote2}>
        <span className={styles.note}>{t("common:sponsered")}</span>
        <span className={styles.note2}>
          <BiBitcoin className={lang === "ar" ? styles.bitcoin_rtl : styles.bitcoin_ltr} />
          {t("common:invest")}
        </span>
      </div> */}
      {/* className= {(search.status === "failed")? styles.searchNotFound:""} */}
    </>
  );
};

export default MySearch;
