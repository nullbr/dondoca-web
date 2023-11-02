import { useLocation } from "react-router-dom";
import TitleBg from "../../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../../Shared/MainButton";
import { featServices } from "../services";
import { InfoIcon } from "../../../assets/icons/icons";

function Featured({ t }) {
  const location = useLocation();

  return (
    <>
      <section className="flex justify-between sm:py-20 py-10">
        <div className="container page-padding">
          <div className="sm:p-20 p-10 bg-white shadow-lg rounded-xl">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
                {t("services.featTitle")}
              </p>
              <img
                src={TitleBg}
                alt="text_bg"
                className="w-[24rem] absolute -top-[10px]"
              />
              <h2 className="sm:text-[3.4rem] text-black font-bold my-10 text-[2.5rem]">
                {t("services.subtitle")}
              </h2>
            </div>
            {/* grid */}
            <div className="grid grid-cols-4 gap-7 h-full sm:mt-7 mt-0">
              {featServices.map((service, idx) => {
                return (
                  <div
                    key={idx}
                    className={`relative sm:h-[30rem] h-[25rem] ${
                      idx === 0
                        ? "md:col-span-2 col-span-4"
                        : "md:col-span-1 col-span-2"
                    }`}
                  >
                    <div
                      className="h-full w-full bg-cover bg-center brightness-50 rounded-xl"
                      style={{ backgroundImage: `url(${service.bgImg})` }}
                    />
                    <div className="absolute top-0 left-0 p-5">
                      <h2 className="text-white sm:text-[3rem] text-[2.4rem] font-bold underline underline-offset-8 decoration-4 decoration-primary">
                        {service.title}
                      </h2>
                      <p className="flex gap-2 mb-14 mt-6 text-white text-[1.6rem] font-medium">
                        <span>
                          <InfoIcon className="w-5 h-5" />
                        </span>
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`${
                location.pathname === "/services" ? "hidden" : "flex"
              } justify-center w-full pt-5`}
            >
              <MainButton
                color="text-primary"
                bg="bg-transparent"
                cN="mt-10"
                hover="hover:bg-primary hover:text-white"
                text={t("services.title")}
                goTo="/services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
