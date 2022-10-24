import { LeftBarToken } from '../../components/Token/Leftheader/LeftBarToken'
import { NavBar } from '../../components/Home/Header/NavBar'
import Search from '../../components/Home/Search/MySearch'
import TrustScore from '../../components/Token/TrustScore/TrustScore'
import { ContractAnalysisCard } from '../../components/Token/ContractAnalysis/ContractAnalysisCard'
import { HoneypotCard } from '../../components/Token/Honeypot/HoneypotCard'
import { RugpullCard } from '../../components/Token/Rugpull/RugpullCard'
import Distribution from '../../components/Token/Distribution/Distribution'
import BreadCrumbBar from '../../components/Token/BreadCrumbBar/BreadCrumbBar'
import WalletsSection from '../../components/Token/WalletsSection/WalletsSection'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTokenOwner } from '../../store/tokenOwnerSlice'
import { fetchWallet } from '../../store/topWalletSlice'
import TokenOwner from '../../components/Token/TokenOwner/TokenOwner'
import LiquidtySection from '../../components/Token/LiquidtySection/LiquidtySection'
import { Trading } from '../../components/Token/Trading/Trading'
import { Slippage } from '../../components/Token/Slippage/Slippage'
import { LiquidityList } from '../../components/Token/LiquidityListGroup/LiquidityList'
import { useParams } from 'react-router-dom'
import { AdevertiseTokenOne } from '../../components/Token/Advertise/AdevertiseTokenOne';
import { AdevertiseTokenTwo } from '../../components/Token/Advertise/AdevertiseTokenTwo';
import { AdevertiseTokenThree } from '../../components/Token/Advertise/AdevertiseTokenThree'
import LockedSection from '../../components/Token/LockedSection/LockedSection';
import LockedTokens from '../../components/Token/LockedTokens/LockedTokens'
import { fetchBSCTrasaction } from '../../store/bSCTrasactionSlice';
import { fetchlockedLiquidity } from '../../Services/FetchlockedLiquidity'
import CopyRight from '../../components/Home/CopyRight/CopyRight'
import { useTranslation } from 'react-i18next';
import { TableLoader } from '../../components/common/TableLoader'
import { socket } from '../../utils/socket';
import { useNavigate } from 'react-router-dom';
import { fetchSearchParams } from '../../Pages/DataFetch/FetchSearchData';
import UseAdvertisment from '../../hooks/UseAdvertisment'
export function Token() {
    const dispatch = useDispatch();
    const params = useParams();
    const tokenOwnerData = useSelector(state => state.tokenOwner.tokenOwner);
    // calling advertisment
    let { getAdvertismentData, advertisment_Status, advertisment_code } = UseAdvertisment('Report')
    // const ipAddress = useSelector(state => state.GetIPAddress.data);
    const navigate = useNavigate()

    const tokenOwner_isLoading = useSelector(state => state.tokenOwner.loading);
    // const tokenList_isLoading = useSelector(state => state.tokenList.loading);
    const topWallet_isLoading = useSelector(state => state.topWallet.loading);
    const bscLiquidity_isLoading = useSelector(state => state.bscLiquidityScan.loading);
    const bscTransaction_isLoading = useSelector(state => state.bSCTrasaction.loading);
    const lockedLiquiditydata = useSelector(state => state.GetlockedLiquiditydata?.data);
    const lockedLiquidity_status = useSelector(state => state.GetlockedLiquiditydata?.status);
    const tokeninfodata = useSelector((state) => state.Gettokeninfodata?.data?.result);
    const { t } = useTranslation(["token"])

    const topWalletData = useSelector(state => state.topWallet.topWallet);
    const bSCTrasaction = useSelector(state => state.bSCTrasaction.bSCTrasaction);
    const bscLiquidityScan = useSelector(state => state.bscLiquidityScan.bscLiquidity);
    const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);
    const statusSlippage = useSelector(state => state.GetBuySellBSCdata.status);
    const search_params = useSelector((state) => state.Search?.statusParams);

    //rejected message=Request failed with status code 404
    //console.log("search_params: ", search_params)

    const tokenAddress = params.contractAddress;

    //navigate to 404
    useEffect(() => {
        dispatch(fetchSearchParams(tokenAddress))
    }, [dispatch, tokenAddress])

    useEffect(() => {
        dispatch(fetchlockedLiquidity(tokenAddress))
    }, [dispatch, tokenAddress])
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
        if (search_params === 'loading' || search_params === null) {
            return
        }
        else if (search_params?.responseCode === 400) {
            navigate('/404')
        }
    }, [navigate, search_params]);

    // useEffect(() => {
    //     if (!/[^0x].{39}$/.test(tokenAddress)) {
    //     navigate('/404')
    //     console.log("pp")
    //     }
    //   }, [navigate, tokenAddress]);       

    // tokeninfodata?.contractInfo?.name
// tokeninfodata?.contractInfo?.logo
    useEffect(() => {
        socket.emit('currentLocation', { contractAddress: tokenAddress, page: 'token' ,name:tokeninfodata?.contractInfo?.name,logo:tokeninfodata?.contractInfo?.logo});
        // return () => {
        //     socket.emit('leaveTokenPage', { contractAddress: tokenAddress });
        // }
    }, [tokenAddress, tokeninfodata?.contractInfo?.logo, tokeninfodata?.contractInfo?.name]);

    useEffect(() => {
        dispatch(fetchTokenOwner(tokenAddress))
        dispatch(fetchWallet(tokenAddress))
        dispatch(fetchBSCTrasaction(tokenAddress))
    }, [dispatch, tokenAddress]);


    return (

        <div className="bg-white" >
            {/* <h1>search_status: {search_data}</h1> */}
            <NavBar />
            <section className='container '>
                <div className='d-flex mt-4 flex-wrap align-items-center justify-content-between '>
                    <div className='order-2 mt-5 order-lg-1 col-12 col-lg-6'> <LeftBarToken /></div>
                    <div className='order-1 order-lg-2 '> <Search /></div>
                </div>
                <div><BreadCrumbBar /></div>

                <div className='row mt-5'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <TrustScore />
                    </div>
                    <div className='col-12 col-lg-9'>

                        <div className='row'>
                            <div className='col-12 col-md-4'><ContractAnalysisCard /></div>
                            <div className='col-12 col-md-4'>
                                <div className='col-12'> <HoneypotCard /></div>
                                <div className='col-12'> <RugpullCard /></div>
                            </div>
                            <div className='col-12 col-md-4 '>
                                <div className='col-12' >
                                    {
                                        advertisment_code === 200 &&
                                        advertisment_Status === 'success' &&
                                        <AdevertiseTokenOne
                                            getAdvertismentData={getAdvertismentData}
                                        />
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row  align-items-center mb-5'>
                    <div className='col-lg-6 col-md-12'>
                        <Distribution />
                    </div>
                    <div className='col-lg-6 col-md-12'>

                        {
                            (topWallet_isLoading === 'success' || tokenOwner_isLoading === 'success' || bscTransaction_isLoading === 'success') ?
                                <div className='wallets_table wallet_table_td_width'>
                                    <WalletsSection walletsData={tokenOwnerData} topWalletData={topWalletData} bSCTrasaction={bSCTrasaction} />
                                </div> :
                                ((topWallet_isLoading === "failed" || tokenOwner_isLoading === "failed" || bscTransaction_isLoading === "failed") ?
                                    // <Navigate to="/404"/> 
                                    null
                                    :
                                    <TableLoader />)
                        }
                        <div className='mt-5'>
                            <AdevertiseTokenTwo
                                getAdvertismentData={getAdvertismentData}
                            />
                        </div>


                    </div>
                </div>

                <div className='row mb-5'>
                    {/* {
                        (tokenOwner_isLoading === 'success' && tokenOwnerData?.ownerInfo?.ownerAddress) &&
                        <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>
                                <TokenOwner tokenOwnerData={tokenOwnerData} />
                            </div>

                        </div>
                    } */}
                    {
                        lockedLiquidity_status === 'success' &&
                        lockedLiquiditydata?.APIsResult?.length > 0 &&
                        <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>
                                <LockedTokens LockedTokensData={lockedLiquiditydata} />
                            </div>
                        </div>
                    }
                    {
                        lockedLiquidity_status === 'loading' &&
                        <div className='col-lg-6 col-md-12'>
                        <TableLoader />
                        </div>
                    }

                    {/* {
                        lockedLiquiditydata?.APIsResult?.length >0

                        && <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>
                                <LockedTokens LockedTokensData={lockedLiquiditydata} />
                            </div>
                        </div>
                    } */}

                    <div className='col-lg-6 col-md-12'>
                        <div className='wallets_table'>
                            <LockedSection LockedTokensData={tokenOwnerData} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-6 mb-4 d-flex flex-column'>
                        {(statusBSCapi === 'success' || statusSlippage === 'success') && <h2 className='text-muted mx-2' style={{ fontFamily: 'SF Pro Display Medium', fontSize: '26px' }}>{t("token:trading")}</h2>}
                        <div className='d-md-flex justify-content-center'>
                            <Trading />
                            <LiquidityList />
                        </div>
                        <div className='d-md-flex  justify-content-space-between '>
                            <Slippage />
                            <div className='mt-5'>
                                <AdevertiseTokenThree
                                    getAdvertismentData={getAdvertismentData}
                                />
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-lg-6'>
                        {
                            (bscLiquidity_isLoading === 'success' || bscTransaction_isLoading === 'success') ?
                                <div className='wallets_table wallet_table_td_width'>
                                    <LiquidtySection LiquidtyData={bscLiquidityScan} bSCTrasaction={bSCTrasaction} />
                                </div> :
                                ((bscLiquidity_isLoading || bscTransaction_isLoading) ? <TableLoader /> : null
                                )

                        }
                    </div>
                </div>


                <br />
            </section>
            <CopyRight />
        </div>

    )
}