import FooterLogo from "../../../assets/images/logo/logo-footer.png";
import { useTranslation } from "react-i18next";

function AdminFooter() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-10">
          {/* footer div all */}
          <div className="flex min620:flex-col min620:items-center min620:gap-[5rem]">
            {/* logo side */}
            <div className="flex flex-col w-1/2 min620:items-center min620:w-full">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
            </div>

            <div className="flex flex-col w-1/2 text-end min620:text-center min620:w-full">
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default AdminFooter;
