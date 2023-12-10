import Logo from "@assets/images/deveLogo.png";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthButtons from "./AuthButtons";

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
          <NavLink to="/">About</NavLink>
          <NavLink to="/tokens">Tokens</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
        <AuthButtons />
      </div>
    </section>
  );
};

export default Navbar;
