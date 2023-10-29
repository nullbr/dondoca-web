import { NavLink } from "react-router-dom";

function NavList({ t, sticky, admin }) {
  return (
    <>
      {admin ? (
        <>
          <ul
            className={`flex gap-9 text-[16px] font-medium xl:none ${
              sticky ? "text-gray" : "text-white"
            }`}
          >
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="schedules"
                exact="true"
                activeClassName="active"
                to="/admin/schedules"
              >
                {t("admin.nav.schedule")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="workers"
                exact="true"
                activeClassName="active"
                to="/admin/workers"
              >
                {t("admin.nav.workers")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="clients"
                exact="true"
                activeClassName="active"
                to="/admin/clients"
              >
                {t("admin.nav.clients")}
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul
            className={`flex gap-9 text-[16px] font-medium xl:none ${
              sticky ? "text-gray" : "text-white"
            }`}
          >
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="home" exact="true" activeClassName="active" to="/">
                {t("nav.home")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="about"
                exact="true"
                activeClassName="active"
                to="/about"
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="gallery"
                exact="true"
                activeClassName="active"
                to={"/gallery"}
              >
                {t("nav.gallery")}
              </NavLink>
            </li>
            {/* <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-primary"
        >
          <NavLink to={"/schedules/monday"}>{t("nav.schedules")}</NavLink>
        </li> */}
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="services"
                exact="true"
                activeClassName="active"
                to={"/services"}
              >
                {t("nav.services")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink
                id="contact"
                exact="true"
                activeClassName="active"
                to={"/contact"}
              >
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default NavList;
