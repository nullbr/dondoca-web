import Img3 from "../assets/images/AboutPage/3.jpg";
import Img4 from "../assets/images/AboutPage/4.jpg";
import Target from "../assets/images/AboutPage/target.png";
import Mountain from "../assets/images/AboutPage/mountain.png";
import { useEffect } from "react";
import { Global } from "../context/GlobalContext";
import AboutSection from "../components/Shared/AboutSection";

const About = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.about") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  }, [setScrollY, t]);

  return (
    <>
      <section className="header-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <AboutSection />
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
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
