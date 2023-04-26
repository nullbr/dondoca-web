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
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="schedules"
                exact="true"
                activeclassname="active"
                to="/admin/schedules"
              >
                {t("admin.nav.schedule")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="workers"
                exact="true"
                activeclassname="active"
                to="/admin/workers"
              >
                {t("admin.nav.workers")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="clients"
                exact="true"
                activeclassname="active"
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
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink id="home" exact="true" activeclassname="active" to="/">
                {t("nav.home")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="about"
                exact="true"
                activeclassname="active"
                to="/about"
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="gallery"
                exact="true"
                activeclassname="active"
                to={"/gallery"}
              >
                {t("nav.gallery")}
              </NavLink>
            </li>
            {/* <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/schedules/monday"}>{t("nav.schedules")}</NavLink>
        </li> */}
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="services"
                exact="true"
                activeclassname="active"
                to={"/services"}
              >
                {t("nav.services")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink
                id="contact"
                exact="true"
                activeclassname="active"
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
