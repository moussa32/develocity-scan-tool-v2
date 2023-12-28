import Logo from "@assets/images/deveLogo.png";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import AuthButtons from "./AuthButtons";
import MySearch from "@/shared/components/MySearch";
import { ErrorBoundary } from "react-error-boundary";
import { MdOutlineReplay } from "react-icons/md";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearchBar(true);
    }
  }, [location.pathname]);

  return (
    <section className="py-8 lg:py-0 lg:h-[172px] bg-primaryLayoutColor flex items-center">
      <div className="container flex items-center flex-col justify-center gap-y-8 lg:flex-row">
        <img className="lg:ltr:mr-[48px] lg:rtl:ml-[48px]" src={Logo} />
        <nav className="flex items-center gap-x-[35px] font-medium text-semiWhite text-sm">
          <NavLink
            className={({ isActive }) =>
              `duration-200 ease-in-out transition-all ${
                isActive ? "text-primary" : ""
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <a href="https://develocity.finance">About</a>
          <NavLink to="/tokens">Tokens</NavLink>
          <a href="https://develocity.finance/contact-us">Contact</a>
        </nav>
        {/* <AuthButtons /> */}
        <div className="ml-auto w-full md:w-96">
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div className="bg-red-500/95 flex items-center gap-9 justify-between rounded text-white h-full py-6 px-4">
                <div>
                  <p className="text-lg">Contract responded with wrong fit</p>
                  <p className="text-sm mt-4">{error.message}</p>
                </div>
                <button
                  onClick={() => resetErrorBoundary()}
                  className="cursor-pointer flex-shrink-0 bg-white/50 w-10 h-10 rounded flex items-center justify-center"
                >
                  <MdOutlineReplay size={20} />
                </button>
              </div>
            )}
          >
            <MySearch />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
