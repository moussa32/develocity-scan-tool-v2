import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./Pages/About";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { WelcomingModal } from "./components/Home/WelcomingModal/WelcomingModal";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import Changelog from "./Pages/Changelog/Changelog";
import PageLoader from "./components/common/PageLoader";
import "./App.css";
const Home = lazy(() => import("./Pages/Home/Home"));
const Tokens = lazy(() => import("./Pages/Tokens/Tokens"));
const Token = lazy(() => import("./Pages/Token/Token"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "tokens",
        element: <Tokens />,
      },
      {
        path: "Changelog",
        element: <Changelog />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "token/:network/:contractAddress",
        element: <Token />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

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
        <RouterProvider router={router} />
      </Suspense>
      <WelcomingModal />
    </ErrorBoundary>
  );
}

export default App;
