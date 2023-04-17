import { createSlice } from "@reduxjs/toolkit";

const isPageLoaded = createSlice({
  name: "isPageLoaded",
  reducers: {
    changeLoadingStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
  initialState: {
    status: false,
  },
});

export const { changeLoadingStatus } = isPageLoaded.actions;
export default isPageLoaded.reducer;
