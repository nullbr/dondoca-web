import { useLocation } from "react-router-dom";
import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../Shared/MainButton";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="bg-white shadow-lg rounded-xl">
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
        {/* text section */}
        <div className="p-10">
          {/* Title */}
          <div className="sm:pt-10 pt-0">
            <p className="text-white text-[15px] text-center relative z-10 uppercase font-bold">
              {t("aboutUs.title")}
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className="w-[200px] relative -top-[30px] left-[50%] -translate-x-[50%]"
            />
          </div>
          <h2 className="sm:text-[3.4rem] text-center font-bold text-[2.5rem]">
            {t("aboutUs.subtitle")}
          </h2>
          <p className="text-[16px] text-[#646464] font-medium text-justify">
            {t("aboutUs.description")}
          </p>
          <div className="flex w-full justify-center mt-10">
            <MainButton
              color="text-primary"
              bg="bg-transparent"
              cN="mt-10"
              hover="hover:bg-primary hover:text-white"
              text={
                location.pathname === "/about"
                  ? t("contactUs.title")
                  : t("aboutUs.title")
              }
              goTo={location.pathname === "/about" ? "/contact" : "/about"}
            />
          </div>
        </div>
        {/* img side */}
        <div className="flex sm:justify-end h-full sm:w-auto w-full justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/assets%2Fhome%2Fequipe.png?alt=media&token=b5ea3dfd-64b0-4b46-846a-cc6345e0ebb6"
            alt="brushes"
            className="sm:rounded-r-xl rounded-b-xl sm:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
