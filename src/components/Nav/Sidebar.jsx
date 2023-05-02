import { useEffect } from "react";
import LogoSide from "../../assets/images/logo/logo-footer.png";

const Sidebar = ({ toggleSideBar, t }) => {
  useEffect(() => {
    const div = document.getElementById("sidebarGallery");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://www.juicer.io/embed/dondocasr/embed-code.js?style=slider&columns=1&interval=1000"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex">
        {/* Content */}
        <div className="flex flex-col w-[40rem] max-w-full h-screen bg-slightly-transparent py-10 px-[45px] min620:pb-[10rem] gap-24 overflow-x-hidden">
          {/* logo & X */}
          <div className="flex justify-between items-center">
            <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
            <i
              onClick={toggleSideBar}
              className="fa-solid fa-xmark text-signature-gold text-[3.3rem] cursor-pointer"
            ></i>
          </div>
          {/* about us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("aboutUs.title")}</h3>
            <p className="text-[1.6rem] font-medium text-[#000000b1]">
              {t("aboutUs.description")}
            </p>
          </div>
          {/* gallery */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("nav.gallery")}</h3>
            <div id="sidebarGallery" className="w-full"></div>
          </div>
          {/* contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("contactUs.title")}</h3>
            <a
              href={t("contactUs.addressUrl")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-location-dot text-signature-gold"></i>
                &nbsp; {t("contactUs.addressLine1")}
                <br />
                {t("contactUs.addressLine2")}
              </p>
            </a>
            <a
              href={`https://wa.me/${t(
                "contactUs.phoneNumberInteger"
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
          {/* follow us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("defaults.followUs")}</h3>
            <div className="flex gap-5">
              <span className="bg-signature-gold rounded-full py-[10px] px-[13px] cursor-pointer">
                <a
                  href={t("defaults.instagram")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Allow user to click outside the box to close */}
        <div
          className="close-sidebar-div cursor-pointer bg-transparent-gray min620:bg-transparent"
          onClick={toggleSideBar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
