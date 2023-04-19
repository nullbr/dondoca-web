import TitleBg from "../../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../../Shared/MainButton/MainButton";
import "./Featured.css";

function Featured({ t }) {
  return (
    <>
      <section className="flex justify-between about-section py-20">
        <div className="container page-padding">
          <div className="p-20 bg-white shadow-lg">
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
            <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
              <div className="item-0-div relative">
                <div className="item-0 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv2")}
                  </p>
                </div>
              </div>

              <div className="item-1-div relative">
                <div className="item-1 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv3")}
                  </p>
                </div>
              </div>

              <div className="item-2-div relative">
                <div className="item-2 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv5")}
                  </p>
                </div>
              </div>

              <div className="item-3-div relative">
                <div className="item-3 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv6")}
                  </p>
                </div>
              </div>

              <div className="item-4-div relative">
                <div className="item-4 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv4")}
                  </p>
                </div>
              </div>

              <div className="item-5-div relative">
                <div className="item-5 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">
                    {t("services.serv1")}
                  </p>
                </div>
              </div>
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
