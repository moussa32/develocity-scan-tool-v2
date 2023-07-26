import { LeftBarToken } from "../../components/Token/Leftheader/LeftBarToken";
import { NavBar } from "../../components/Home/Header/NavBar";
import Search from "../../components/Home/Search/MySearch";
import TrustScore from "../../components/Token/TrustScore/TrustScore";
import { ContractAnalysisCard } from "../../components/Token/ContractAnalysis/ContractAnalysisCard";
import { HoneypotCard } from "../../components/Token/Honeypot/HoneypotCard";
import { RugpullCard } from "../../components/Token/Rugpull/RugpullCard";
import Distribution from "../../components/Token/Distribution/Distribution";
import BreadCrumbBar from "../../components/Token/BreadCrumbBar/BreadCrumbBar";
import WalletsSection from "../../components/Token/WalletsSection/WalletsSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTokenOwner } from "../../store/tokenOwnerSlice";
import { fetchWallet } from "../../store/topWalletSlice";
import TokenOwner from "../../components/Token/TokenOwner/TokenOwner";
import LiquidtySection from "../../components/Token/LiquidtySection/LiquidtySection";
import { Trading } from "../../components/Token/Trading/Trading";
import { Slippage } from "../../components/Token/Slippage/Slippage";
import { LiquidityList } from "../../components/Token/LiquidityListGroup/LiquidityList";
import { useParams } from "react-router-dom";
import { AdevertiseTokenOne } from "../../components/Token/Advertise/AdevertiseTokenOne";
import { AdevertiseTokenTwo } from "../../components/Token/Advertise/AdevertiseTokenTwo";
import { AdevertiseTokenThree } from "../../components/Token/Advertise/AdevertiseTokenThree";
import LockedSection from "../../components/Token/LockedSection/LockedSection";
import LockedTokens from "../../components/Token/LockedTokens/LockedTokens";
import { fetchBSCTrasaction } from "../../store/bSCTrasactionSlice";
import { fetchlockedLiquidity } from "../../store/FetchlockedLiquidity";
import CopyRight from "../../components/Home/CopyRight/CopyRight";
import { useTranslation } from "react-i18next";
import { TableLoader } from "../../components/common/TableLoader";
import { socket } from "../../config/socket";
import { useNavigate } from "react-router-dom";
import { fetchSearchParams } from "../../store/FetchSearchData";
import UseAdvertisment from "../../hooks/UseAdvertisment";
import styles from "./Token.module.css";
import { fetchBSCResult } from "../../store/FetchBSCData";
import { fetchTokenInfoResult } from "../../store/FetchTokenInfo";
import { fetchBuySellBSCResult } from "../../store/FetchBuySellBSC";
import { fetchBscLiquidityScan } from "../../store/bscLiquidityScanSlice";
import { ErrorBoundary } from "react-error-boundary";
import ErrorWrapper from "../../components/common/ErrorWrapper";
import ErrorPart from "../../components/common/ErrorPart";

const Token = () => {
  const dispatch = useDispatch();
  const { contractAddress } = useParams();
  // calling advertisment
  let { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment("Report");
  // const ipAddress = useSelector(state => state.GetIPAddress.data);
  const navigate = useNavigate();

  const tokenOwnerLoading = useSelector(state => state.tokenOwner.loading);
  // const tokenList_isLoading = useSelector(state => state.tokenList.loading);
  const bscTransaction_isLoading = useSelector(state => state.bSCTrasaction.loading);
  const tokeninfodata = useSelector(state => state.Gettokeninfodata?.data?.result);
  const bSCTrasaction = useSelector(state => state.bSCTrasaction.bSCTrasaction);
  const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);
  const statusSlippage = useSelector(state => state.GetBuySellBSCdata.status);
  const search_params = useSelector(state => state.Search?.statusParams);
  const tokenOwnerData = useSelector(state => state.tokenOwner);
  const { data: lockedLiquiditydata, status: lockedLiquidity_status } = useSelector(state => {
    return {
      data: state.GetlockedLiquiditydata?.data,
      status: state.GetlockedLiquiditydata?.status,
    };
  });
  const { bscLiquidity: bscLiquidityScan, loading: bscLiquidity_isLoading } = useSelector(state => {
    return {
      bscLiquidity: state.bscLiquidityScan.bscLiquidity,
      loading: state.bscLiquidityScan.loading,
    };
  });
  const { t } = useTranslation(["token"]);

  // useEffect(() => {
  //     let timer = setTimeout(() => {
  //         if (search_params?.responseCode !==200) {
  //             navigate('/404')
  //             }
  //     }, 2000);

  //     return () => {
  //         clearTimeout(timer);
  //       };
  //   }, [navigate, search_params]);

  useEffect(() => {
    if (search_params?.responseCode === 400) {
      navigate("/404");
    } else {
      return;
    }
  }, [navigate, search_params]);

  // useEffect(() => {
  //     if (search_params === 'loading' || search_params === null) {
  //         return
  //     }
  //     else if (search_params?.responseCode === 400) {
  //         navigate('/404')
  //     }
  // }, [navigate, search_params]);

  // useEffect(() => {
  //     if (!/[^0x].{39}$/.test(contractAddress)) {
  //     navigate('/404')
  //     console.log("pp")
  //     }
  //   }, [navigate, contractAddress]);

  // tokeninfodata?.contractInfo?.name
  // tokeninfodata?.contractInfo?.logo
  useEffect(() => {
    socket.emit("currentLocation", {
      contractAddress: contractAddress,
      page: "token",
      name: tokeninfodata?.contractInfo?.name,
      logo: tokeninfodata?.contractInfo?.logo,
    });
    // return () => {
    //     socket.emit('leaveTokenPage', { contractAddress: contractAddress });
    // }
  }, [contractAddress, tokeninfodata?.contractInfo?.logo, tokeninfodata?.contractInfo?.name]);

  useEffect(() => {
    dispatch(fetchSearchParams(contractAddress));
    dispatch(fetchTokenOwner(contractAddress));
    dispatch(fetchWallet(contractAddress));
    dispatch(fetchBSCTrasaction(contractAddress));
    dispatch(fetchBSCResult(contractAddress));
    dispatch(fetchlockedLiquidity(contractAddress));
    dispatch(fetchTokenInfoResult(contractAddress));
    dispatch(fetchBuySellBSCResult(contractAddress));
    dispatch(fetchBscLiquidityScan(contractAddress));
  }, [dispatch, contractAddress]);

  return (
    <div className="bg-white">
      <NavBar />
      <div className={styles.tokenHeader}>
        <div className="container">
          <div className="row flex-wrap align-items-center">
            <div className={`order-2 order-lg-1 col-12 col-xl-6 ${styles.LeftBarToken}`}>
              <ErrorBoundary FallbackComponent={ErrorWrapper}>
                <LeftBarToken />
              </ErrorBoundary>
            </div>
            <div className={`${styles.searchContainer} order-1 order-lg-2 col-12 col-xl-6`}>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div>
          <BreadCrumbBar />
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-sm-12">
            <TrustScore />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-12 col-md-4">
                <ContractAnalysisCard />
              </div>
              <div className="col-12 col-md-4">
                <HoneypotCard />
                <RugpullCard />
              </div>
              <div className="col-12 col-md-4 ">
                <div className={`col-12 mt-5 mt-md-0 mx-auto ml-6 margin-right justify-content-center ${styles.marginRight}`}>
                  <a href="https://develocity.finance">
                    <img src="../250x250.gif" className={`${styles.marginRight } `} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-6 col-md-12">
            <Distribution />
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.walletsContainer}`}>
            {tokenOwnerLoading === "success" ? (
              <WalletsSection />
            ) : tokenOwnerLoading === "failed" ? null : ( // <Navigate to="/404"/>
              <div style={{ marginTop: "10px" }}>
                <TableLoader />
              </div>
            )}
            <div className={`mt-3 col-12 d-flex justify-content-center align-items-center`}>
              <a href="https://develocity.finance">
                <img src="../930x180.gif" width={350} className={`${styles.secondAd}`}/>
              </a>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          {tokenOwnerLoading === "success" && (
            <div className="col-lg-6 col-md-12">
              <div className="wallets_table" style={{ height: "100%" }}>
                {tokenOwnerData.tokenOwner.ownerInfo.ownerAddress ? (
                  <TokenOwner ownerInfo={tokenOwnerData.tokenOwner.ownerInfo} />
                ) : (
                  <ErrorPart message={t("token_does_not_have_owner")} />
                )}
              </div>
            </div>
          )}
          {lockedLiquidity_status === "success" && lockedLiquiditydata?.APIsResult?.length > 100 && (
            <div className="col-lg-6 col-md-12">
              <div className="wallets_table table_td_width">
                <LockedTokens LockedTokensData={lockedLiquiditydata} />
              </div>
            </div>
          )}
          {lockedLiquidity_status === "loading" && (
            <div className="col-lg-6 col-md-12">
              <TableLoader />
            </div>
          )}

          {/* {
                        lockedLiquiditydata?.APIsResult?.length >0

                        && <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>
                                <LockedTokens LockedTokensData={lockedLiquiditydata} />
                            </div>
                        </div>
                    } */}

          {/* <div className="col-lg-6 col-md-12">
            <div className="wallets_table">
              <LockedSection />
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 d-flex flex-column">
            <div className="d-md-flex justify-content-center" style={{ gap: "20px" }}>
              <Trading />
              <LiquidityList />
            </div>
            <div className="d-md-flex justify-content-between align-items-center" style={{ gap: "20px" }}>
              <Slippage />
              <div className={` mx-auto  justify-content-center ${styles.marginRight}`}>
                <a href="https://develocity.finance">
                  <img src="../250x250.gif" className={` mt-3  ${styles.marginRight}`}/>
                </a>
              </div>

            </div>
          </div>
          <div className="col-12 col-lg-6">
            {bscLiquidity_isLoading === "success" || bscTransaction_isLoading === "success" ? (
              <div className="wallets_table wallet_table_td_width">
                <LiquidtySection LiquidtyData={bscLiquidityScan} bSCTrasaction={bSCTrasaction} />
              </div>
            ) : bscLiquidity_isLoading || bscTransaction_isLoading === true ? (
              <TableLoader />
            ) : null}
          </div>
        </div>
        <br />
      </section>
      <CopyRight />
    </div>
  );
};

export default Token;
