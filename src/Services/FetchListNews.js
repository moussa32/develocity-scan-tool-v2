import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchListNewsdata = createAsyncThunk('changelog/fetchListNewsdata',
    async (category) => {
        const response = await axios.get(`https://api.develocity.finance/api/v1/user/listNews?category=${category}`)
        return response.data.result
    }
);

const GetListNewsdata = createSlice({
    name: 'changelog',
    reducers: {

    },
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [fetchListNewsdata.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";

        },
        [fetchListNewsdata.pending]: (state) => {
            state.status = "loading";

        },
        [fetchListNewsdata.rejected]: (state) => {
            state.status = "failed";

        }
    }

})

export default GetListNewsdata.reducer;
