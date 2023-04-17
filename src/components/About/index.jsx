import "./index.css";
import Img1 from "../../assets/images/logo/logo-mobile.png";
import Target from "../../assets/images/AboutPage/target.svg";
import Mountain from "../../assets/images/AboutPage/mountain.svg";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";
import AboutSection from "./AboutSection";
import Professionals from "./Professionals";

const About = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.about") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  }, [setScrollY, t]);

  return (
    <>
      <section className="main-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>

        <div className="container page-padding py-[5rem] flex flex-col justify-center gap-20">
          <AboutSection />
          <Professionals t={t} />
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">
                  {t("aboutUs.history.title1")}
                </h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  {t("aboutUs.history.description1")}
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img1}
                  alt="about_img"
                  className="w-full h-full object-contain bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img1}
                  alt="about_img"
                  className="w-full h-full object-contain bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">
                  {t("aboutUs.history.title2")}
                </h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  {t("aboutUs.history.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
