import { Link } from "react-router-dom";
import "./index.css";
import { ArrowRightIcon } from "../../../assets/icons/icons";

interface MainButtonProps {
  color?: string;
  bg?: string;
  cN?: string;
  arrowColor?: string;
  hover?: string;
  text: string;
  goTo: string;
}

function MainButton({
  color,
  bg,
  cN,
  arrowColor,
  hover,
  text,
  goTo,
}: MainButtonProps) {
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
