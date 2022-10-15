import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../Network/axiosconfig";

export const fetchlockedLiquidity = createAsyncThunk('getlockedtoken/fetchlockedLiquidity',
    async (contractaddress) => {
        try {
            let response = await instance.get(`contract/lockedLiquidity?contractAddress=${contractaddress}`)
            return response.data
        } catch (error) {
            return error.response.data
        }
    }
);




const GetlockedLiquiditydata=createSlice({
    name:'getlockedtoken',
    reducers:{

    },
    initialState:{
        data:[],
        status:null,
        responsecode:null
    },
    extraReducers:{
        [fetchlockedLiquidity.fulfilled] : (state,{payload}) =>{
            state.data = payload?.result;
            state.status = "success";
            state.responsecode=payload?.responseCode
        },
        [fetchlockedLiquidity.pending] : (state, {payload}) =>{
            state.status = "loading";
            state.responsecode=payload?.responseCode
        },
        [fetchlockedLiquidity.rejected] : (state, {payload}) =>{
            state.status = "failed";
            state.responsecode=payload?.responseCode


        }
    }

})
export default GetlockedLiquiditydata.reducer;


