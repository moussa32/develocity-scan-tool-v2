import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@components/ProtectedRoute";
import PageLoader from "@components/PageLoader";
import Layout from "./shared/layout/Layout";
import CreateAccount from "./pages/auth/CreateAccount";

const HomePage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@pages/home/HomePage")), 2700);
    })
);
const TokenPage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@pages/token/TokenPage")), 2700);
    })
);
const TokensPage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@pages/tokens/TokensPage")), 2700);
    })
);
const SelectNetworkPage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@pages/token/SelectNetworkPage")), 2700);
    })
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "token/:network/:contractAddress", element: <TokenPage /> },
      { path: "token/:contractAddress", element: <SelectNetworkPage /> },
      { path: "auth/create-account", element: <CreateAccount /> },
      { path: "tokens", element: <TokensPage /> },
      { path: "news" },
      {
        path: "user",
        element: <ProtectedRoute />,
        children: [{ path: "edit" }, { path: "profile" }],
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
