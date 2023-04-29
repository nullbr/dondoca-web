import TitleBg from "../../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../../Shared/MainButton";
import "./Featured.css";

function Featured({ t }) {
  const featServices = [
    { title: t("services.serv1") },
    { title: t("services.serv2") },
    { title: t("services.serv3") },
    { title: t("services.serv4") },
    { title: t("services.serv5") },
    { title: t("services.serv6") },
    { title: t("services.serv7") },
  ];

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
            <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 min800:mt-0 md1000:grid-rows-4 min620:flex min620:flex-col">
              {featServices.map((serv, idx) => {
                return (
                  <div
                    key={idx}
                    className={`item-${idx}-div relative rounded-xl`}
                  >
                    <div
                      className={`item-${idx} ease-in duration-[0.4s] p-6`}
                    ></div>
                    <div className="absolute z-10 bottom-10 left-10">
                      <p className="text-white text-[3rem] min800:text-[2.4rem] font-bold">
                        {serv.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center w-full pt-5">
              <MainButton
                color="text-white"
                bg="bg-[#3f3f3f]"
                cN="mt-10"
                arrowColor="text-white"
                hover="hover:bg-signature-gold"
                text={t("nav.services")}
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
