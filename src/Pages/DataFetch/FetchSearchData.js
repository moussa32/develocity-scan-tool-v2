// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../Network/axiosconfig';


export const fetchResult = createAsyncThunk('search/fetchResult',
    async (searchKey) => {
        const response = await instance.get(`user/suggestion?name=${searchKey}`)
        // const response = await axios.get(`https://api.develocity.finance/api/v1/user/suggestion?name=${searchKey}`)
        console.log("response_Search: ", response.data)
        return response.data

    });

export const fetchSearchParams = createAsyncThunk('search/fetchSearchParams',
    async (searchKey) => {
        try {
            const responseSuggest = await instance.get(`user/suggestion?name=${searchKey}`)
            console.log("reSearch", responseSuggest)
            return responseSuggest.data

        } catch (err) {
            console.log("err", err.response.data)

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
        suggestParamsData:[],
        statusParams:null

    },
    extraReducers: {
        [fetchResult.fulfilled]: (state, payload) => {
            state.data = payload;
            console.log("new:", payload)
            state.status = "success";

        },
        [fetchResult.pending]: (state) => {
            state.status = "loading";

        },
        [fetchResult.rejected]: (state) => {
            state.status = "failed";


        },
        // suggest for params
        [fetchSearchParams.fulfilled]: (state, {payload}) => {
            // ['responseCode', 'responseMessage']
            console.log("payload: ",payload)

            state.statusParams=payload
          

        },
        [fetchSearchParams.pending]: (state, { payload }) => {
            console.log("payload: ",payload)

            state.statusParams='loading'





        },
        [fetchSearchParams.rejected]: (state,{payload}) => {
            console.log("payload: ",payload)
            state.statusParams=payload





        },

    }
})





export default Search.reducer;