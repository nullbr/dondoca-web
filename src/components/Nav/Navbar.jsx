import "./Navbar.css";
import { useState } from "react";
import Logo from "../../images/logo/logo_full.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import LogoSide from "../../images/logo/logo-footer.svg";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 900) {
      setSticky(true);
    } else {
      setSticky(false);
    }
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
          sticky ? "shadow-xl bg-[rgb(255,255,255,0.95)]" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="nav-logo max-h-20 w-auto pr-5"
          />
        </Link>
        <div className="navlist-nav">
          <NavList sticky={sticky} />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? "left-0" : "-left-[100%]"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-signature-gold text-[3.3rem] cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    href="/#home"
                  >
                    Inicio
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/about"
                  >
                    Sobre
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/schedule/monday"
                  >
                    Agende
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/gallery/page-1"
                  >
                    Galeria
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/contact"
                  >
                    Contato
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/pricing"
                  >
                    Preços
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                    to="/classes"
                  >
                    Serviços
                  </Link>
                </li>
              </ul>
            </div>

            {/* sidebar */}

            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  sidebar ? "left-0" : "-left-[100%]"
                }`}
              >
                {/* logo & X */}
                <div className="flex justify-between items-center">
                  <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark text-signature-gold text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src={SideImg1}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg2}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg3}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg4}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg5}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={SideImg6}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-location-dot text-signature-gold"></i>
                    &nbsp; 59 Street, House Newyork City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-signature-gold"></i>
                    &nbsp; +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-signature-gold"></i>
                    &nbsp; gymate@gymail.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-signature-gold rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-signature-gold rounded-full py-[12px] px-[12px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-signature-gold rounded-full py-[10px] px-[13px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <i
              onClick={hamburgerMenu}
              className={`fa-bars fa-solid hidden text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                sticky ? "text-gray" : "text-white"
              }`}
            ></i>
            {/* account */}
            <Link onClick={goTop} to="/signup" title="signup_button">
              <i
                className={`fa-regular fa-user text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
                  sticky ? "text-gray" : "text-white"
                }`}
              ></i>
            </Link>
            {/* sidebar */}
            <i
              onClick={sideBar}
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
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-signature-gold text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                } ${sticky ? "text-gray" : "text-white"}`}
              ></i>
              <h3
                className={`text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider ${
                  sticky ? "text-gray" : "text-white"
                }`}
              >
                agende sua visita
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
