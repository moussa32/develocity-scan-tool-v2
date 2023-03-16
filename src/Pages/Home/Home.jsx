import { NavBar } from "../../components/Home/Header/NavBar";
import { Section1 } from "../../components/Home/Main/section1/Section1";
import { Section2 } from "../../components/Home/Main/section2/Section2";
import CopyRight from "../../components/Home/CopyRight/CopyRight";
import { socket } from "../../config/socket";
import { useEffect } from "react";
// import { fetchgetAdvertismentResult } from '../../Services/FetchAdvertisment';
// import { useDispatch, useSelector } from 'react-redux'
// import UseAdvertisment from '../../hooks/UseAdvertisment';

function Home() {
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
    return () => socket.off("currentLocation");
  }, []);

  return (
    <>
      <NavBar />
      <Section1 />
      <Section2 />
      <CopyRight />
    </>
  );
}

export { Home };
