import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";
import { services } from "./services";
import "./index.css";

const Services = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.services") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  });

  return (
    <>
      <section className="header-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Services
          </h1>
        </div>

        <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left grid">
          {services.map((service) => {
            return (
              <div
                key={service.name}
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
