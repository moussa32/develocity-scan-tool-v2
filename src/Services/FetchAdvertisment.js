import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../Network/axiosconfig";

export const fetchgetAdvertismentResult = createAsyncThunk('getadvertisement/fetchgetAdvertismentResult',
    async (position) => {
        try {
            let ipAddress = await axios.get("https://api.ipify.org?format=json");
            let response = await instance.get(`user/getAdvertisement?ipAddress=${ipAddress.data.ip}&viewMode=WebSite&adPosition=${position}`)
            // let response=await axios.get('https://mocki.io/v1/1fa28769-ecd5-406a-864c-9ab704dcc418')
            return response.data

        } catch (error) {
            return error.response.data
        }
    }
);

export const fetchviewAdvertismentResult = createAsyncThunk('viewadvertisement/fetchviewAdvertismentResult',
    async (advertId) => {
// 'http://20.218.124.106:1885/api/v1/user/viewAdvertisment?AdvertId=63107cbe37e97e2378a98001&ipAddress=0.0.0.0&viewMode=WebSite'

        try {
            let ipAddress = await axios.get("https://api.ipify.org?format=json");
            let response = await instance.get(`user/viewAdvertisment?AdvertId=${advertId}&ipAddress=${ipAddress.data.ip}&viewMode=WebSite`)
            return response.data.result

        } catch (error) {
            return error.response.data
        }
    }
);


const GetAdvertismentodata=createSlice({
    name:'getadvertisement',
    reducers:{

    },
    initialState:{
        data:[],
        status:null,
        responsecode:null
    },
    extraReducers:{
        [fetchgetAdvertismentResult.fulfilled] : (state,{payload}) =>{
            state.data = payload?.result;
            state.status = "success";
            state.responsecode=payload?.responseCode

        },
        [fetchgetAdvertismentResult.pending] : (state, {payload}) =>{
            state.status = "loading";
            state.responsecode=payload?.responseCode


        },
        [fetchgetAdvertismentResult.rejected] : (state, {payload}) =>{
            state.status = "failed";
            state.responsecode=payload?.responseCode


        }
    }

})

export default GetAdvertismentodata.reducer;


