import Logo from "@assets/images/deveLogo.png";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import AuthButtons from "./AuthButtons";
import MySearch from "@/shared/components/MySearch";
import ErrorCoverageWrapper from "@/shared/components/ErrorCoverageWrapper";

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
      <div className="container flex items-center flex-col justify-center lg:justify-start gap-y-8 lg:flex-row">
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
        {showSearchBar && (
          <div className="ml-auto w-full md:w-96">
            <ErrorCoverageWrapper message="Contract responded with wrong fit">
              <MySearch />
            </ErrorCoverageWrapper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
