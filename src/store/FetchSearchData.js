// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../config/axiosconfig';


export const fetchResult = createAsyncThunk('search/fetchResult',
    async (searchKey) => {
        try{
            const response = await instance.get(`user/suggestion?name=${searchKey}`)
            // const response = await axios.get(`https://api.develocity.finance/api/v1/user/suggestion?name=${searchKey}`)
            return response.data
        }catch(error){
            return error.response.data
        }
        

    });

export const fetchSearchParams = createAsyncThunk('search/fetchSearchParams',
    async (searchKey) => {
        try {
            // const responseSuggest = await instance.get(`user/suggestion?name=${searchKey}`)
            const responseSuggest = await instance.get(`contract/lockedLiquidity?contractAddress=${searchKey}`)

            
            return responseSuggest.data

        } catch (err) {

            return err.response.data
        }

    });




const Search = createSlice({
    name: " search",
    reducers: {

    },
    initialState: {
        data: [],
        status: null,
        searchCode:null,
        suggestParamsData:[],
        statusParams:null

    },
    extraReducers: {
        [fetchResult.fulfilled]: (state, payload) => {
            state.data = payload;
            // console.log("new:", payload)
            state.status = "success";
            state.searchCode=payload.payload?.responseCode
        },
        [fetchResult.pending]: (state, payload) => {
            state.status = "loading";
            state.searchCode=payload.payload?.responseCode

        },
        [fetchResult.rejected]: (state, payload) => {
            state.status = "failed";
            state.searchCode=payload.payload?.responseCode
        },
        // suggest for params
        [fetchSearchParams.fulfilled]: (state, {payload}) => {
            // ['responseCode', 'responseMessage']
            // console.log("payload fill: ",payload)
            state.statusParams=payload
        },
        [fetchSearchParams.pending]: (state, { payload }) => {
            // console.log("payload: ",payload)
            state.statusParams=payload
            // state.statusParams='loading'
        },
        [fetchSearchParams.rejected]: (state,{payload}) => {
            // console.log("payload reject: ",payload)
            state.statusParams=payload
        },

    }
})





export default Search.reducer;