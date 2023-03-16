import { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About";
import { Token } from "./Pages/Token/Token";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Tokens from "./Pages/Tokens/Tokens";
import Changelog from "./Pages/Changelog/Changelog";
import { useTranslation } from "react-i18next";
import { WelcomingModal } from "./components/Home/WelcomingModal/WelcomingModal";
import { SpinnerRoundFilled } from "spinners-react";
import { ScrollToTop } from "./components/common/ScrollToTop";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation(["common"]);

  let lang = localStorage.getItem("i18nextLng") || "";

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), 2000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [lang, i18n]);

  return (
    <>
      <Suspense fallback={null}>
        {loading ? (
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="tokens" element={<Tokens />} />
              <Route path="Changelog" element={<Changelog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="token/:contractAddress" element={<Token />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <SpinnerRoundFilled color={"#000"} />
          </div>
        )}
      </Suspense>
      <WelcomingModal />
    </>
  );
}

export default App;
