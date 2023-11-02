import { NavLink } from "react-router-dom";
import { TFunction } from "i18next";

interface NavListProps {
  t: TFunction<"translation", undefined, "translation">;
  sticky: boolean;
  admin: boolean;
}

function NavList({ t, sticky, admin }: NavListProps) {
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
              <NavLink id="schedules" to="/admin/schedules">
                {t("admin.nav.schedule")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="workers" to="/admin/workers">
                {t("admin.nav.workers")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="clients" to="/admin/clients">
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
              <NavLink id="home" to="/">
                {t("nav.home")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="about" to="/about">
                {t("nav.about")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="gallery" to={"/gallery"}>
                {t("nav.gallery")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="services" to={"/services"}>
                {t("nav.services")}
              </NavLink>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-primary"
            >
              <NavLink id="contact" to={"/contact"}>
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
