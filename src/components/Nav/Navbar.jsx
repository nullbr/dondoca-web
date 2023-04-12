import "./Navbar.css";
import { useState } from "react";
import Logo from "../../assets/images/logo/logo_full.png";
import NavList from "../Nav/NavList";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

function Navbar() {
  const { t } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // sidebar
  const toggleSideBar = () => {
    setSideBar(!sidebar);
  };

  // mobile nav
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 900) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    // close tabs if scroll
    setMobileNav(false);
    setSideBar(false);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

            <Sidebar toggleSideBar={toggleSideBar} sidebar={sidebar} t={t} />

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
            {/* sidebar */}
            <i
              onClick={toggleSideBar}
              className={`fa-regular fa-chart-bar text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                sticky ? "text-gray" : "text-white"
              }`}
            ></i>
          </div>
          {/* spin box */}
          <div
            className={`border-solid border-2  p-2 rounded-md min620:hidden ${
              sticky
                ? "border-[rgb(81,82,91,0.3)]"
                : "border-[rgb(255,255,255,0.3)]"
            }`}
          >
            <NavLink to={"/contact"} className="flex items-center ">
              <i
                className={`fa-solid fa-plus bg-signature-gold text-2xl py-3 px-4 rounded-md nav-btn-hover ${
                  sticky ? "text-gray" : "text-white"
                }`}
              ></i>
              <h3
                className={`text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider ${
                  sticky ? "text-gray" : "text-white"
                }`}
              >
                agende sua visita
              </h3>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
