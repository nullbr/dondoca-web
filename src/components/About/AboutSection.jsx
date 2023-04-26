import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import sideImg from "../../assets/images/home/equipe.png";
import MainButton from "../Shared/MainButton";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <div className="p-10 bg-white shadow-lg rounded-xl">
      {/* Title */}
      <div className="pt-10">
        <p className="text-white text-[15px] text-center relative z-10 uppercase font-bold">
          {t("aboutUs.title")}
        </p>
        <img
          src={TitleBg}
          alt="text_bg"
          className="w-[200px] relative -top-[30px] left-[50%] -translate-x-[50%]"
        />
      </div>

      <div className="flex min800:flex-col gap-20 items-center">
        {/* text section */}
        <div className="w-[60%] min800:w-full">
          <h2 className="text-[3.4rem] font-bold min620:text-[2.5rem]">
            {t("aboutUs.subtitle")}
          </h2>
          <p className="text-[16px] text-[#646464] font-medium min800:text-justify">
            {t("aboutUs.description")}
          </p>
          <div className="flex w-full min800:justify-center mt-10">
            <MainButton
              color={`text-white`}
              bg={`bg-[#3f3f3f]`}
              cN=""
              arrowColor={`text-white`}
              hover={`hover:bg-signature-gold`}
              text={t("contactUs.title")}
              goTo="/contact"
            />
          </div>
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
    </div>
  );
}
export default AboutSection;
