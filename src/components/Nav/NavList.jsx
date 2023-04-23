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
              <NavLink to="/admin">{t("admin.nav.calendar")}</NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to="/admin/workers">{t("admin.nav.workers")}</NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to="/admin/clients">{t("admin.nav.clients")}</NavLink>
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
              <NavLink to="/">{t("nav.home")}</NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to="/about">{t("nav.about")}</NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to={"/gallery"}>{t("nav.gallery")}</NavLink>
            </li>
            {/* <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/schedule/monday"}>{t("nav.schedule")}</NavLink>
        </li> */}
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to={"/services"}>{t("nav.services")}</NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-signature-gold"
            >
              <NavLink to={"/contact"}>{t("nav.contact")}</NavLink>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default NavList;
