import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../Shared/MainButton";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray text-white shadow-lg rounded-xl">
      <div className="grid grid-cols-2 md1000:grid-cols-1 items-center">
        {/* text section */}
        <div className="p-10">
          {/* Title */}
          <div className="pt-10">
            <p className="text-[15px] text-center relative z-10 uppercase font-bold">
              {t("aboutUs.title")}
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className="w-[200px] relative -top-[30px] left-[50%] -translate-x-[50%]"
            />
          </div>
          <h2 className="text-[3.4rem] text-center font-bold min620:text-[2.5rem]">
            {t("aboutUs.subtitle")}
          </h2>
          <p className="text-[16px] font-medium text-justify">
            {t("aboutUs.description")}
          </p>
          <div className="flex w-full justify-center mt-10">
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
        <div className="flex justify-end h-full md1000:w-full md1000:justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/assets%2Fhome%2Fequipe.png?alt=media&token=b5ea3dfd-64b0-4b46-846a-cc6345e0ebb6"
            alt="brushes"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
