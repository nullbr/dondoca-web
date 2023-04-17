import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import sideImg from "../../assets/images/home/equipe.png";
import MainButton from "./MainButton/MainButton";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center md1000:flex-col w-full gap-20 p-10 bg-white shadow-lg">
      <div className="flex flex-col text-left relative items-right self-center max-w-[450px] md1000:items-center md1000:text-center md1000:w-full">
        <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-1 ml-20 md1000:ml-3 ">
          {t("home.about.title")}
        </p>
        <img
          src={TitleBg}
          alt="text_bg"
          className="w-[200px] relative -top-[30px]"
        />
        <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
          {t("home.about.subtitle")}
        </h2>
        <p className="text-[16px] text-[#646464] font-medium ">
          {t("home.about.description")}
        </p>
        <MainButton
          color={`text-white`}
          bg={`bg-[#3f3f3f]`}
          cN="mt-10"
          arrowColor={`text-white`}
          hover={`hover:bg-signature-gold`}
          text={t("contactUs.title")}
          goTo="/contact"
        />
      </div>
      {/* img side */}
      <div className="flex justify-end md1000:w-full md1000:px-5 md1000:justify-center">
        <img
          src={sideImg}
          alt="brushes"
          className="rounded-full w-full h-auto max-w-[45rem] min-w-[20rem] border-4 border-signature-gold"
        />
      </div>
    </div>
  );
}
export default AboutSection;
