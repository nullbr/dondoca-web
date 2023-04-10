import { Link } from "react-router-dom";

function NavList({ sticky }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
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
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/about"}>
            About
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Gallery
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/schedule/monday"}>
            Schedule
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/blog"}>
            Blog
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/classes"}>
            Classes
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-signature-gold"
        >
          <Link onClick={goTop} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
