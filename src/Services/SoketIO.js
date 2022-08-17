// import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';
// import { io } from "socket.io-client";
// let socket = io('https://api.develocity.finance'); 
const connectSlice = createSlice({
    name: 'socket',
    initialState: {
        popularScan:null
    },
    reducers: {
        connectToio:(state)=>{
            // let socket = io('https://api.develocity.finance');
            // socket.on("popularScan", (data) => {
            //     console.log('data2',data)
            //     state.popularScan='data'

            // }) 
            // console.log("socket", socket)
        }
    },

})

export default connectSlice.reducer;

export const { connectToio } = connectSlice.actions



