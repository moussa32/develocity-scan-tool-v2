import axios from "axios";
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import instance from "./../Network/axiosconfig";

export const fetchTokenInfoResult=createAsyncThunk('tokeninfo/fetchTokenInfoResult',
    async(contractAddress,  { dispatch, getState })=>{
        // const {GetIPAddress}=getState()
        let request1=await axios.get("https://api.ipify.org?format=json");

        const response= await instance.get(`contract/tokenInfo?contractAddress=${contractAddress}&ipAddress=${request1.data.ip}&contractType=Binance`)
        // const response= await axios.get(`https://api.develocity.finance/api/v1/contract/tokenInfo?contractAddress=${contractAddress}&ipAddress=${request1.data.ip}&contractType=Binance`) 
        // console.log("contractAddress", request1.data.ip);
        return response.data

        //
       


    }
);

const Gettokeninfodata=createSlice({
    name:'tokeninfo',
    reducers:{

    },
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchTokenInfoResult.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchTokenInfoResult.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchTokenInfoResult.rejected] : (state) =>{
            state.status = "failed";

        }
    }

})

export default Gettokeninfodata.reducer;
