import { configureStore } from '@reduxjs/toolkit'
import contractAddressSlice from './contractAddressSlice'
import SearchReducer from './FetchSearchData'
import GetBSCdataReducer from './FetchBSCData'
import GettokeninfodataReducer from './FetchTokenInfo';
import GetBuySellBSCdataReducer from './FetchBuySellBSC';
import GetListNewsdataReducer from './FetchListNews';
import GetAdvertismentodataReducer from './FetchAdvertisment';
import ScoreReducer from "./FetchTrustScoreData";
import DistReducer from "./FetchDistributionData";
import GetlockedLiquiditydataReducer from './FetchlockedLiquidity'
import tokenOwnerSlice from "./tokenOwnerSlice";
import topWalletSlice from "./topWalletSlice";
import bscLiquidityScanSlice from './bscLiquidityScanSlice'
import bSCTrasactionSlice from './bSCTrasactionSlice'
import tokenListSlice from './tokenListSlice'
import GetIPReducer from './FetchIPAddress'
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
        GetlockedLiquiditydata:GetlockedLiquiditydataReducer
    },
})