import LogoSide from "../../assets/images/logo/logo-footer.svg";
import SideImg1 from "../../assets/images/sidebar/1.jpg";
import SideImg2 from "../../assets/images/sidebar/2.jpg";
import SideImg3 from "../../assets/images/sidebar/3.jpg";
import SideImg4 from "../../assets/images/sidebar/4.jpg";
import SideImg5 from "../../assets/images/sidebar/5.jpg";
import SideImg6 from "../../assets/images/sidebar/6.jpg";

const Sidebar = ({ toggleSideBar, sidebar, t }) => {
  return (
    <div
      className={`absolute w-screen h-screen z-[9999999999] ease-in-out duration-500 top-0 ${
        sidebar ? "left-0" : "-left-[100%]"
      }`}
    >
      <div className="flex">
        {/* Content */}
        <div className="flex flex-col w-[40rem] max-w-full h-screen bg-slightly-transparent p-[45px] gap-24 overflow-x-hidden">
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
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <img
                src={SideImg1}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
              <img
                src={SideImg2}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
              <img
                src={SideImg3}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
              <img
                src={SideImg4}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
              <img
                src={SideImg5}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
              <img
                src={SideImg6}
                alt="sidebar_gallery"
                className="rounded-xl cursor-pointer "
              />
            </div>
          </div>
          {/* contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("contactUs.title")}</h3>
            <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
              <i className="fa-solid fa-location-dot text-signature-gold"></i>
              &nbsp; {t("contactUs.address")}
            </p>
            <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
              <i className="fa-solid fa-phone text-signature-gold"></i>
              &nbsp; {t("contactUs.phoneNumber")}
            </p>
            <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
              <i className="fa-solid fa-envelope text-signature-gold"></i>
              &nbsp; {t("contactUs.email")}
            </p>
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
          className="close-sidebar-div cursor-pointer"
          onClick={toggleSideBar}
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;
