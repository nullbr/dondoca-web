import { useEffect } from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.contact") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("contactUs.title")}
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-20 page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[3.4rem] min620:text-[2.5rem] font-bold leading-[1.2]">
              {t("contactUs.subTitle")}
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              {t("contactUs.pitch")}
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.address")}
                </h3>
                <a
                  href={t("contactUs.addressUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-[15px] font-medium text-[#646464] hover:text-signature-gold cursor-pointer ease-in duration-200">
                    {t("contactUs.addressLine1")}
                    <br />
                    {t("contactUs.addressLine2")}
                  </p>
                </a>
              </div>
              {/* hours */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.hours")}
                </h3>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>
                    {t("contactUs.tueSat")}: {t("contactUs.tueSatTime")}
                  </p>
                  <p>
                    {t("contactUs.sunMon")}: {t("contactUs.sunMonTime")}
                  </p>
                </div>
              </div>
              {/* contact info */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.title")}
                </h3>
                <div className="text-[15px] font-medium text-[#646464]">
                  <a
                    href={`https://wa.me/${t(
                      "contactUs.phoneNumber"
                    )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                      <i className="fa-solid fa-phone text-signature-gold"></i>
                      &nbsp; {t("contactUs.phoneNumber")}
                    </p>
                  </a>
                  <a href={`mailto:${t("contactUs.email")}`}>
                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                      <i className="fa-solid fa-envelope text-signature-gold"></i>
                      &nbsp; {t("contactUs.email")}
                    </p>
                  </a>
                </div>
              </div>
              {/* social */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("defaults.followUs")}
                </h3>
                <a
                  href={t("defaults.instagram")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-medium text-black flex gap-5"
                >
                  <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-signature-gold ease-in duration-200 hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <Reviews t={t} />
        </div>
        {/* map */}
        <div className="container">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.00786099906!2d-48.468732!3d-23.5952949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf12ac1eb5a78f%3A0x6e9af4c3a2643e75!2sDondoca!5e0!3m2!1sen!2sbr!4v1681853979425!5m2!1sen!2sbr"
            style={{
              width: "100%",
              height: "45rem",
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
