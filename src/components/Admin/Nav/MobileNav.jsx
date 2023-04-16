import { NavLink } from "react-router-dom";

const MobileNav = ({ toggleMobileNav, mobileNav, t }) => {
  return (
    <div
      className={`absolute w-screen h-screen z-[9999999999] ease-in-out duration-500 top-0 ${
        mobileNav ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className="flex">
        <div
          className="close-nav-div cursor-pointer"
          onClick={toggleMobileNav}
        ></div>
        <div className="flex w-[20rem] max-w-full justify-end h-screen bg-slightly-transparent py-[3rem] pr-[3rem]">
          {/* links */}
          <ul className="flex flex-col gap-10 text-end">
            <i
              onClick={toggleMobileNav}
              className="fa-solid fa-xmark text-signature-gold text-[3.3rem] cursor-pointer"
            ></i>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/admin"
              >
                {t("admin.nav.calendar")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/admin"
              >
                {t("admin.nav.workers")}
              </NavLink>
            </li>
            {/* <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/schedule/monday"
              >
                {t("nav.schedule")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/gallery"
              >
                {t("nav.gallery")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/contact"
              >
                {t("nav.contact")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/pricing"
              >
                Prices
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                className="text-[2rem] font-medium hover:text-signature-gold ease-in duration-200"
                to="/services"
              >
                {t("nav.services")}
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;