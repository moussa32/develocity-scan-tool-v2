import React, { useState,useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { Suspense } from 'react';
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About'
import { Token } from './Pages/Token/Token'
import { PrivacyPolicy } from './Pages/PrivacyPolicy/PrivacyPolicy';
import './App.css';
import Tokens from './Pages/Tokens/Tokens';
import Changelog from './Pages/Changelog/Changelog';
import { useTranslation } from 'react-i18next';
import { WelcomingModal } from './components/Home/WelcomingModal/WelcomingModal';
import { SpinnerRoundFilled } from 'spinners-react';
import { ScrollToTop } from './components/common/ScrollToTop';
function App() {

  const [loading, setLoading] = useState(false);
  const {  i18n   } = useTranslation(["common"]);

  let lang = localStorage.getItem("i18nextLng")||''
  i18n.on('loaded', function(loaded) {
      console.log("loaded",loaded[lang]?.common)
  })
  useEffect(() => {
   
    let timer = setTimeout(() => setLoading(true), 2000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer);
      setLoading(false)
    };

  }, [lang, i18n])


//   const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch (fetchIpaddressResponse());
// },[ dispatch]);

  return (
    <>
   
    <React.Suspense fallback={null} >
      {loading ? <BrowserRouter >
      <ScrollToTop/>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='token/:contractAddress' element={<Token />} />
          <Route path='tokens' element={<Tokens />} />
          <Route path='Changelog' element={<Changelog />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter> : <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}><SpinnerRoundFilled color={"#000"}/></div>}
    </React.Suspense>
    <WelcomingModal/>
    </>
  );

}

export default App;





