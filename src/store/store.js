import { configureStore } from '@reduxjs/toolkit'
import contractAddressSlice from './contractAddressSlice'
import SearchReducer from './../Pages/DataFetch/FetchSearchData'
import GetBSCdataReducer from './../Services/FetchBSCData'
import GettokeninfodataReducer from './../Services/FetchTokenInfo';
import GetBuySellBSCdataReducer from './../Services/FetchBuySellBSC';
import GetListNewsdataReducer from './../Services/FetchListNews';
import GetAdvertismentodataReducer from '../Services/FetchAdvertisment';
import ScoreReducer from "../Pages/DataFetch/FetchTrustScoreData";
import DistReducer from "../Pages/DataFetch/FetchDistributionData";
import GetlockedLiquiditydataReducer from '../Services/FetchlockedLiquidity'
import tokenOwnerSlice from "./tokenOwnerSlice";
import topWalletSlice from "./topWalletSlice";
import bscLiquidityScanSlice from './bscLiquidityScanSlice'
import bSCTrasactionSlice from './bSCTrasactionSlice'
import tokenListSlice from './tokenListSlice'
import GetIPReducer from './../Services/FetchIPAddress'
import connectSliceReducer from '../Services/SoketIO'
export const store = configureStore({
    reducer: {
        contractAddress: contractAddressSlice,
        Search: SearchReducer,
        GetBSCdata: GetBSCdataReducer,
        Gettokeninfodata: GettokeninfodataReducer,
        GetBuySellBSCdata: GetBuySellBSCdataReducer,
        Score: ScoreReducer,
        Dist: DistReducer,
        tokenOwner: tokenOwnerSlice,
        topWallet: topWalletSlice,
        bscLiquidityScan: bscLiquidityScanSlice,
        bSCTrasaction: bSCTrasactionSlice,
        tokenList: tokenListSlice,
        GetListNewsdata:GetListNewsdataReducer,
        GetAdvertismentodata:GetAdvertismentodataReducer,
        GetIPAddress:GetIPReducer,
        connectSlice:connectSliceReducer,
        GetlockedLiquiditydata:GetlockedLiquiditydataReducer
    },
})