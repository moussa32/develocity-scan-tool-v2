import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../config/axiosconfig";

export const fetchBSCResult = createAsyncThunk("bsc/fetchBSCResult", async contractAddress => {
  const response = await instance.get(`contract/getBSCContractDetail/${contractAddress}`);
  // const response= await axios.get(`https://api.develocity.finance/api/v1/contract/getBSCContractDetail/${contractAddress}`)
  return response.data;
});

const GetBSCdata = createSlice({
  name: "bsc",
  reducers: {},
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchBSCResult.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchBSCResult.pending]: state => {
      state.status = "loading";
    },
    [fetchBSCResult.rejected]: state => {
      state.status = "failed";
    },
  },
});

export default GetBSCdata.reducer;
