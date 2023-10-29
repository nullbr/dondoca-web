import { Link } from "react-router-dom";
import "./index.css";
import { ArrowRightIcon } from "../../../assets/icons/icons";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={goTo}
      className={`text-[15px]  ${color || ""} ${bg || ""} ${
        cN || ""
      } flex items-center justify-center text-center font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 rounded-full ${
        hover || ""
      }`}
    >
      {text} &nbsp;
      <ArrowRightIcon className={`h-6 ${arrowColor || ""}`} />
    </Link>
  );
}

export default MainButton;
