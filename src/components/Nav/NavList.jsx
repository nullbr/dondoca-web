import { NavLink } from "react-router-dom";

function NavList({ t, sticky }) {
  return (
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
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/schedule/monday"}>{t("nav.schedule")}</NavLink>
        </li>
        {/* <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink onClick={goTop} to={"/blog"}>
            Blog
          </NavLink>
        </li> 
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink onClick={goTop} to={"/pricing"}>
            Pricing
          </NavLink>
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
  );
}

export default NavList;
