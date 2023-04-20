import "./index.css";
import { useEffect } from "react";
import { services } from "./services";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.services") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <section className="header-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("nav.services")}
          </h1>
        </div>

        <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 text-left grid">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="service-bg rounded-3xl shadow-2xl flex flex-col h-[46rem] relative p-[40px]"
                style={{ backgroundImage: `url(${service.bgImg})` }}
              >
                <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>

                <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
                  <p className="text-white font-bold text-[2.7rem] mb-3">
                    {service.title}
                  </p>

                  <span className="bg-signature-gold w-[50px] h-[4px]"></span>

                  <div className="flex gap-6 mb-14 mt-6 text-[#ffffffe1] text-[1.6rem] font-medium">
                    <p>
                      <i className="fa fa-info-circle pr-5" />
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
