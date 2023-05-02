import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo/logo_full.png";
import NavList from "../Nav/NavList";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import SessionLinks from "./SessionLinks";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Navbar({ admin }) {
  const { t } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const { scrollY } = useSelector((store) => store.navbar);

  // sidebar
  const toggleSideBar = () => {
    setSideBar(!sidebar);
  };

  // mobile nav
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    // sticky navbar - bg black
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // close tabs if scroll
      setMobileNav(false);
      setSideBar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <nav
        className={`flex flex-row items-center justify-between py-4 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
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
          <NavList t={t} sticky={sticky} admin={admin} />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <MobileNav
              toggleMobileNav={toggleMobileNav}
              mobileNav={mobileNav}
              t={t}
              admin={admin}
            />

            {/* Show side bar if not in admin pages */}
            {!admin && (
              <div
                className={`absolute w-screen h-screen z-[9999999999] ease-in-out duration-200 top-0 ${
                  sidebar ? "left-0" : "-left-[100%]"
                }`}
              >
                {sidebar && (
                  <Sidebar
                    toggleSideBar={toggleSideBar}
                    sidebar={sidebar}
                    t={t}
                  />
                )}
              </div>
            )}

            {/* mobileNav */}
            <i
              onClick={toggleMobileNav}
              className={`fa-bars fa-solid hidden text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                sticky ? "text-gray" : "text-white"
              }`}
            ></i>

            {/* handle session */}
            <SessionLinks sticky={sticky} />

            {/* sidebar */}
            {!admin && (
              <i
                onClick={toggleSideBar}
                className={`fa-regular fa-chart-bar text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                  sticky ? "text-gray" : "text-white"
                }`}
              ></i>
            )}
          </div>
          {/* spin box */}
          {!admin && (
            <div
              className={`border-solid border-2  p-2 rounded-md min620:hidden ${
                sticky
                  ? "border-[rgb(81,82,91,0.3)]"
                  : "border-[rgb(255,255,255,0.3)]"
              }`}
            >
              <a
                href={`https://wa.me/${t(
                  "contactUs.phoneNumberInteger"
                )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center "
              >
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
                  {t("nav.scheduleFull")}
                </h3>
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
