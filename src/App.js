import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Changelog from "./Pages/Changelog/Changelog";
import { WelcomingModal } from "./components/Home/WelcomingModal/WelcomingModal";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import PageLoader from "./components/common/PageLoader";
const Home = lazy(() => import("./Pages/Home/Home"));
const Tokens = lazy(() => import("./Pages/Tokens/Tokens"));
const Token = lazy(() => import("./Pages/Token/Token"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
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
      <Suspense fallback={<PageLoader />}>
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
