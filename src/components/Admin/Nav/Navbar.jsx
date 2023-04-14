import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo/logo_full.png";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Global } from "../../../context/GlobalContext";

function AdminNavbar() {
  const { t, scrollY } = Global();
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // mobile nav
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > scrollY) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    // close tabs if scroll
    setMobileNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav
        className={`flex flex-row items-center justify-between py-7 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl bg-slightly-transparent" : "bg-transparent"
        }`}
      >
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo_img"
            className="nav-logo max-h-20 w-auto pr-5"
          />
        </NavLink>
        <div className="navlist-nav">
          <NavList t={t} sticky={sticky} />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <MobileNav
              toggleMobileNav={toggleMobileNav}
              mobileNav={mobileNav}
              t={t}
            />

            {/* mobileNav */}
            <i
              onClick={toggleMobileNav}
              className={`fa-bars fa-solid hidden text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                sticky ? "text-gray" : "text-white"
              }`}
            ></i>
            {/* account */}
            <NavLink to="/signup" title="signup_button">
              <i
                className={`fa-regular fa-user text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                  sticky ? "text-gray" : "text-white"
                }`}
              ></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
