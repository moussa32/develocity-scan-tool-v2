import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Changelog from "./Pages/Changelog/Changelog";
import { useTranslation } from "react-i18next";
import { WelcomingModal } from "./components/Home/WelcomingModal/WelcomingModal";
import { SpinnerRoundFilled } from "spinners-react";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
const Home = lazy(() => import("./Pages/Home/Home"));
const Tokens = lazy(() => import("./Pages/Tokens/Tokens"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
const Token = lazy(() => import("./Pages/Token/Token"));

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

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <SpinnerRoundFilled color={"#000"} />
          </div>
        }
      >
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
      </Suspense>
      <WelcomingModal />
    </ErrorBoundary>
  );
}

export default App;
