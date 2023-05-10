import React, { useEffect, useState } from "react";
// import Ads from '../../components/common/Ads/Ads'
import { NavBar } from "../../components/Home/Header/NavBar";
import Header from "../../components/Tokens/headerTable/Header";
import TokensTable from "../../components/Tokens/Table/TokensTable";
import { fetchTokenList } from "../../store/tokenListSlice";
import styles from "./Tokens.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TableLoader } from "../../components/common/TableLoader";
import { AdvertismentTokens } from "../../components/Token/Advertise/AdvertismentTokens";
import UseAdvertisment from "../../hooks/UseAdvertisment";
import CopyRight from "../../components/Home/CopyRight/CopyRight";

const Tokens = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(["Binance", "score", "High", ""]);
  const [isVerified, setIsVerified] = useState("all");
  const { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment("Token");

  useEffect(() => {
    dispatch(fetchTokenList(value));
  }, [dispatch, value]);

  let tokenList = useSelector(state => state.tokenList.tokenList);
  let tokenList_loading = useSelector(state => state.tokenList.loading);

  const handleChange = event => {
    setValue([
      event.target.selectedOptions[0].getAttribute("data-network"),
      event.target.selectedOptions[0].getAttribute("data-quary"),
      event.target.selectedOptions[0].getAttribute("data-filter"),
      event.target.selectedOptions[0].getAttribute("data-contactScam"),
    ]);
    // setValue([event.target.getAttribute('data-network'), event.target.getAttribute('data-quary'), event.target.getAttribute('data-filter'), event.target.getAttribute('data-contactScam')]);
    // dispatch(fetchTokenList(value));
    setIsVerified("all");
  };

  return (
    <div>
      <NavBar />

      <div style={{ backgroundColor: "#F3F2F7", padding: "25px 0px 35px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              {advertisment_Status === "success" && advertisment_code === 200 && (
                <AdvertismentTokens getAdvertismentData={getAdvertismentData} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FFFFFF", padding: "40px 0px 0px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={styles.container_btn}>
                <div className={styles.container_left}>
                  {/* <div>
                                <select className={styles.select_btn} value={value} onChange={handleChange} multiple={false}>
                                        <option data-network="Binance" data-quary="score" data-filter="High" data-contactScam="" >Trust Score</option>
                                        <option data-network="Binance" data-quary="interest" data-filter="High" data-contactScam="" >Popular Scans</option>
                                        <option data-network="Binance" data-quary="age" data-filter="High" data-contactScam="" >Last Scans</option>
                                        <option  data-network="Binance" data-quary="score" data-filter="High" data-contactScam="0" >Scam</option>
                                    
                                    </select>
                                </div> */}
                  <div>
                    <select className={styles.select_btn} onChange={handleChange} multiple={false}>
                      <option data-network="Binance" data-quary="score" data-filter="High" data-contactScam="">
                        Trust Score
                      </option>
                      <option data-network="Binance" data-quary="interest" data-filter="High" data-contactScam="">
                        Popular Scans
                      </option>
                      <option data-network="Binance" data-quary="age" data-filter="High" data-contactScam="">
                        Last Scans
                      </option>
                      <option data-network="Binance" data-quary="score" data-filter="High" data-contactScam="0">
                        Scam
                      </option>
                    </select>
                  </div>

                  {/* category of tokens type */}
                  {/* <div>
                                <div className="dropdown">
  <button className={`btn border-0  ${styles.category_ntn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">Category
  </button>
  <ul className={`dropdown-menu `}>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='en' onClick={handleChange}>Digital Currency</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='ar' onClick={handleChange}>Exchange Tokens</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='ch' onClick={handleChange}>Financial Crypto Assets</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='ru' onClick={handleChange}>Infrastructure</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='tr' onClick={handleChange}>NFTs</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='tr' onClick={handleChange}>Stablecoins</button></li>
    <li role="button" className="d-flex justify-content-between"><button className="dropdown-item fs-5" value='tr' onClick={handleChange}>Store of Value</button></li>
  </ul>
</div>
                                </div> */}
                  <div>
                    {/* <select className={styles.category_ntn} onChange={categoryChange} multiple={false}>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="" hidden selected>
                        Category
                      </option>
                      <option data-network="" data-quary="interest" data-filter="High" data-contactScam="">
                        Digital Currency
                      </option>
                      <option data-network="" data-quary="age" data-filter="High" data-contactScam="">
                        Exchange Tokens
                      </option>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="0">
                        Financial Crypto Assets
                      </option>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="0">
                        Infrastructure
                      </option>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="0">
                        NFTs
                      </option>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="0">
                        Stablecoins
                      </option>
                      <option data-network="" data-quary="score" data-filter="High" data-contactScam="0">
                        Store of Value
                      </option>
                    </select> */}
                  </div>
                </div>
                <button className={styles.live_btn} disabled>
                  <span>Live New Pairs</span>
                </button>
              </div>
            </div>
          </div>

          {tokenList_loading === "success" && tokenList ? (
            <TokensTable tokenList={tokenList ? tokenList : null} isVerifyied={isVerified} />
          ) : null}
          {tokenList_loading === true ? <TableLoader /> : null}
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default Tokens;
