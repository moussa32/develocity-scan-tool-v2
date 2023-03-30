import { createSlice } from "@reduxjs/toolkit";

const pageLoading = createSlice({
  name: "pageLoading",
  reducers: {},
  initialState: {
    status: false,
  },
});

export default pageLoading.reducer;
