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
          <div className="flex flex-col sm:flex-row items-center gap-10 sm:p-20 p-10 sm:justify-normal justify-center bg-white shadow-lg rounded-xl">
            {/* title */}
            <div>
              <h2 className="text-[2rem] sm:text-start text-center font-bold mb-10 underline underline-offset-8 decoration-4 decoration-primary">
                {t("home.chooseUs.title")}
              </h2>
              <p className="text-[16px] text-[#646464] font-medium text-justify">
                {t("home.chooseUs.description")}
              </p>
            </div>

            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-5 max-w-[44rem] min-w-fit flex flex-col font-bold text-[18px]">
              <div className="flex sm:flex-col flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-primary ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon1} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic1")}
                </p>
              </div>

              <div className="flex sm:flex-col flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-primary ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon2} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic2")}
                </p>
              </div>

              <div className="flex sm:flex-col flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-primary ease-in duration-200 w-[6.5rem] rounded-full p-4">
                  <img className="w-full" src={Icon3} alt="icon" />
                </div>
                <p className="max-w-[150px] text-center">
                  {t("home.chooseUs.topic3")}
                </p>
              </div>

              <div className="flex sm:flex-col flex-row items-center gap-6">
                <div className="bg-[#2b2b2b] hover:bg-primary ease-in duration-200 w-[6.5rem] rounded-full p-4">
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
