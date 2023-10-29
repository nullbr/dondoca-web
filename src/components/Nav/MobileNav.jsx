import { NavLink } from "react-router-dom";
import { CloseIcon } from "../../assets/icons/icons";

const MobileNav = ({ toggleMobileNav, mobileNav, t, admin }) => {
  return (
    <div
      className={`absolute w-screen h-screen z-[999999] ease-in-out duration-500 top-0 sm:bg-transparent-gray bg-transparent ${
        mobileNav ? "right-0" : "-right-[110%]"
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
            <button
              className="text-primary w-full flex justify-end"
              type="button"
              onClick={toggleMobileNav}
            >
              <CloseIcon className="h-6" />
            </button>

            {admin ? (
              <>
                {/* admin nav Links */}
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="services"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/admin/schedules"
                  >
                    {t("admin.nav.schedule")}
                  </NavLink>
                </li>
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="workers"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/admin/workers"
                  >
                    {t("admin.nav.workers")}
                  </NavLink>
                </li>
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="clients"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/admin/clients"
                  >
                    {t("admin.nav.clients")}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* Client nav Links */}
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="home"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/"
                  >
                    {t("nav.home")}
                  </NavLink>
                </li>
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="about"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/about"
                  >
                    {t("nav.about")}
                  </NavLink>
                </li>
                {/* <li onClick={toggleMobileNav}>
                  <NavLink
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/schedules/monday"
                  >
                    {t("nav.schedules")}
                  </NavLink>
                </li> */}
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="gallery"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/gallery"
                  >
                    {t("nav.gallery")}
                  </NavLink>
                </li>
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="contact"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/contact"
                  >
                    {t("nav.contact")}
                  </NavLink>
                </li>
                <li onClick={toggleMobileNav}>
                  <NavLink
                    id="services"
                    exact="true"
                    activeClassName="active"
                    className="text-[2rem] font-medium hover:text-primary ease-in duration-200"
                    to="/services"
                  >
                    {t("nav.services")}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
