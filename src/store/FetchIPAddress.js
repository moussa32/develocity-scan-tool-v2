import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIpaddressResponse = createAsyncThunk('getip/fetchIpaddressResponse',
    async () => {
        const response = await axios.get("https://api.ipify.org?format=json")
        console.log("response",response.data.ip)
        return response.data
    }
);

const GetIP = createSlice({
    name: 'getip',
    reducers: {

    },
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [fetchIpaddressResponse.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";

        },
        [fetchIpaddressResponse.pending]: (state) => {
            state.status = "loading";

        },
        [fetchIpaddressResponse.rejected]: (state) => {
            state.status = "failed";

        }
    }

})

export default GetIP.reducer;
