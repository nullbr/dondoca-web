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
          <NavLink to="/about">About</NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/gallery/page-1"}>Gallery</NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/schedule/monday"}>Schedule</NavLink>
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
          <NavLink to={"/classes"}>Classes</NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavList;
