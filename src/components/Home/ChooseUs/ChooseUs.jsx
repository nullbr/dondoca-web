import Icon1 from "../../../assets/images/choose-us/heart.svg";
import Icon2 from "../../../assets/images/choose-us/relax.svg";
import Icon3 from "../../../assets/images/choose-us/style.svg";
import Icon4 from "../../../assets/images/choose-us/special.svg";
import { useTranslation } from "react-i18next";

function ChooseUs() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pb-10">
        <div className="container page-padding">
          <div className="flex md1000:flex-col items-center gap-10 p-20 min800:p-10 md1000:justify-center bg-white shadow-lg rounded-xl">
            {/* title */}
            <div>
              <h2 className="text-[2rem] md1000:text-center font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                {t("home.chooseUs.title")}
              </h2>
              <p className="text-[16px] text-[#646464] font-medium text-justify">
                {t("home.chooseUs.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w-[44rem] min-w-fit min450:flex min450:flex-col font-bold text-[18px]">
              <div className="flex flex-col md1000:flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-signature-gold ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon1} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic1")}
                </p>
              </div>

              <div className="flex flex-col md1000:flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-signature-gold ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon2} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic2")}
                </p>
              </div>

              <div className="flex flex-col md1000:flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-signature-gold ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon3} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic3")}
                </p>
              </div>

              <div className="flex flex-col md1000:flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-signature-gold ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon4} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
