// import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from "../config/axiosconfig";

export const fetchBuySellBSCResult = createAsyncThunk('buy/fetchBuySellBSCResult',
    async (contractaddress) => {
        const response= await instance.get(`contract/buySellBSCFeePercentage?contractAddress=${contractaddress}`)
        // const response = await axios.get(`https://api.develocity.finance/api/v1/contract/buySellBSCFeePercentage?contractAddress=${contractaddress}`)
        return response.data
    }
);

const GetBuySellBSCdata = createSlice({
    name: 'buy',
    reducers: {

    },
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [fetchBuySellBSCResult.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";

        },
        [fetchBuySellBSCResult.pending]: (state) => {
            state.status = "loading";

        },
        [fetchBuySellBSCResult.rejected]: (state) => {
            state.status = "failed";

        }
    }

})

export default GetBuySellBSCdata.reducer;
