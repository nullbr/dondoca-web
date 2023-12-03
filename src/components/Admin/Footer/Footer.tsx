import FooterLogo from "../../../assets/images/logo/logo-footer.png";
import { useTranslation } from "react-i18next";

function AdminFooter() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-10">
          {/* footer div all */}
          <div className="flex flex-col sm:flex-row sm:items-start items-center sm:gap-0 gap-[5rem]">
            {/* logo side */}
            <div className="flex flex-col sm:w-1/2 sm:items-start items-center w-full">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
            </div>

            <div className="flex flex-col sm:w-1/2 sm:text-end text-center w-full">
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Dondoca <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={t("defaults.brunoLink") || ""}
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
