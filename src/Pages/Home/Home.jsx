import { NavBar } from "../../components/Home/Header/NavBar";
import { Section1 } from "../../components/Home/Main/section1/Section1";
import { Section2 } from "../../components/Home/Main/section2/Section2";
import CopyRight from "../../components/Home/CopyRight/CopyRight";
import { socket } from "../../config/socket";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
// import { fetchgetAdvertismentResult } from '../../Services/FetchAdvertisment';
// import { useDispatch, useSelector } from 'react-redux'
// import UseAdvertisment from '../../hooks/UseAdvertisment';

const Home = () => {
  // let {getAdvertismentData}=UseAdvertisment('Home')

  // const dispatch = useDispatch();
  // const getAdvertismentData=useSelector(state=>state.GetAdvertismentodata.data)
  //  requset advertisment
  //   useEffect(()=>{
  //     dispatch(fetchgetAdvertismentResult('Home') )
  // }, [dispatch])
  useEffect(() => {
    socket.emit("currentLocation", { page: "home" });
    // return () => {
    //     socket.emit('leaveTokenPage', { contractAddress: tokenAddress });
    // }
  }, []);

  return (
    <>
      <Helmet>
        <title>Develocity Tool | BSC Blockchain Scanner & Token Analyzer</title>
        <meta
          name="description"
          content="Discover Develocity Tool, your go-to BSC blockchain scanner for in-depth token analysis, including token holders, slippage, fees, and more. Make informed decisions with accurate, real-time information."
        />
        <meta
          name="keyword"
          content="BSC blockchain scanner, token analysis, token holders, slippage, fees, Develocity Tool, Binance Smart Chain, token information, tokenomics, blockchain tool"
        />
      </Helmet>
      <NavBar />
      <Section1 />
      <Section2 />
      <CopyRight />
    </>
  );
};

export default Home;
