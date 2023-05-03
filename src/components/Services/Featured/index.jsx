import { useLocation } from "react-router-dom";
import TitleBg from "../../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../../Shared/MainButton";
import { featServices } from "../services";

function Featured({ t }) {
  const location = useLocation();

  return (
    <>
      <section className="flex justify-between py-20 min800:py-10">
        <div className="container page-padding">
          <div className="p-20 min800:p-10 bg-white shadow-lg rounded-xl">
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
              <h2 className="text-[3.4rem] text-black font-bold my-10 min620:text-[2.5rem]">
                {t("services.subtitle")}
              </h2>
            </div>
            {/* grid */}
            <div className="grid grid-cols-4 gap-7 h-full mt-7 min800:mt-0">
              {featServices.map((service, idx) => {
                return (
                  <div
                    key={idx}
                    className={`relative h-[30rem] min800:h-[25rem] ${
                      idx === 0
                        ? "col-span-2 md1000:col-span-4"
                        : "col-span-1 md1000:col-span-2 min620:col-span-4"
                    }`}
                  >
                    <div
                      className="h-full w-full bg-cover bg-center brightness-50 rounded-xl"
                      style={{ backgroundImage: `url(${service.bgImg})` }}
                    />
                    <div className="absolute top-0 left-0 p-5">
                      <h2 className="text-white text-[3rem] min800:text-[2.4rem] font-bold underline underline-offset-8 decoration-4 decoration-signature-gold">
                        {service.title}
                      </h2>
                      <p className="mb-14 mt-6 text-white text-[1.6rem] font-medium">
                        <i className="fa fa-info-circle pr-5" />
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
                color="text-signature-gold"
                bg="bg-transparent"
                cN="mt-10"
                hover="hover:bg-signature-gold hover:text-white"
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
