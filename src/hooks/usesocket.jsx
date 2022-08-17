// import { useEffect, useState } from "react";
import { io } from "socket.io-client";
// import { useParams } from "react-router-dom";

export const socket = io('http://20.218.124.106:1885');
// export function useSocket(){
//     const [popularScans, setPopularScans] = useState([]);
//     const [recentScans, setRecentScans] = useState([]);
//     const [lastScans, setLastScans] = useState([]);
//     const param=useParams()

//     function emitEnterToken(){
//         socket.emit('intoTokenPage', {contractAddress:'aya'});
//     }
//     emitEnterToken();
//     useEffect(() => {
     

//         socket.on("popularScan", (data) => {
//             setPopularScans(data);
//             console.log('data',data)
//         })
//         socket.on("highScore", (data) => {
//             setRecentScans(data);
//         }
//         )
//         socket.on("latestScan", (data) => {

//             setLastScans(data);

//         })

//         return () => {
//             socket.off("popularScan");
//             socket.off("highScore");
//             socket.off("latestScan");
//             socket.close();
//         }
//     }, []);


//     return{
//         popularScans,
//         recentScans,
//         lastScans ,
//         emitEnterToken, 
//     }
// }