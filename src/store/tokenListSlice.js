import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import instance from '../Network/axiosconfig'

export const fetchTokenList = createAsyncThunk('tokenList/fetchTokenList', async (network) => {
    // const response = await axios.get(`https://api.develocity.finance/api/v1/user/tokenList?network=${network[0]}&${network[1]}=${network[2]}`)
    const response= await instance.get(`user/tokenList?network=${network[0]?`${network[0]}`:'' }&${network[1]?`${network[1]}`:'' }=${network[2]?`${network[2]}`:'' }${network[3]? `&contractScan=${network[3]}`:''}`)
    
    // const response= await instance.get(`user/tokenList?network=${network[0]}&${network[1]}=${network[2]}&contractScan=${network[3]}`)
    console.log("network", network)
    return response.data?.result.result.docs
})

const tokenListSlice = createSlice({
    name: 'tokenList',
    initialState: {
        tokenList: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchTokenList.fulfilled]: (state, action) => {
            state.tokenList = action.payload
            state.loading = 'success'

        },
        [fetchTokenList.pending]: (state, action) => {
            state.loading = true
            state.error = null
            state.tokenList = action.payload;
        },
        [fetchTokenList.rejected]: (state, action) => {
            state.loading = false
        }
    }
}
)


export default tokenListSlice.reducer



