import { NavLink } from "react-router-dom";
import FooterLogo from "../../assets/images/logo/logo-footer.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col sm:flex-row sm:items-start items-center text-center sm:gap-0 gap-[5rem] sm:text-left">
            {/* logo side */}
            <div className="flex flex-col gap-8 sm:w-5/12 w-full sm:justify-normal justify-center sm:text-start text-center">
              <img
                src={FooterLogo}
                alt="footer_logo"
                className="w-[18rem] sm:self-auto self-center"
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
            <NavLink
              id="services"
              exact="true"
              activeClassName="active"
              to="/services"
              className="flex flex-col gap-3 relative sm:w-3/12 w-full text-center"
            >
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-primary">
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
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv6")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv7")}
              </p>
            </NavLink>

            {/* right div */}
            <NavLink
              id="contact"
              exact="true"
              activeClassName="active"
              to="/contact"
              className="flex flex-col gap-8 relative sm:w-4/12 w-full text-center"
            >
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-primary">
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
            </NavLink>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
