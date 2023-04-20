import FooterLogo from "../../assets/images/logo/logo-footer.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col gap-8 w-5/12 min620:w-full min620:justify-center min620:text-center">
              <img
                src={FooterLogo}
                alt="footer_logo"
                className="w-[18rem] min620:self-center"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                {t("aboutUs.description")}
              </p>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Dondoca <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={t("defaults.brunoLink")}
                >
                  Bruno Leite
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative w-3/12 min620:w-full text-center">
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-signature-gold">
                {t("services.featTitle")}
              </p>

              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv1")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv2")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv3")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv4")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv5")}
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative w-4/12 min620:w-full text-center">
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-signature-gold">
                {t("contactUs.hours")}
              </p>

              <p className="text-[16px]  text-[#646464] font-bold">
                {t("contactUs.tueSat")}:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("contactUs.tueSatTime")}:
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                {t("contactUs.sunMon")}:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("contactUs.sunMonTime")}
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
