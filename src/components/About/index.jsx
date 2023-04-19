import "./index.css";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";
import AboutSection from "./AboutSection";
import Professionals from "./Professionals";
import History from "./History";

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
          <History t={t} />
        </div>
      </section>
    </>
  );
};

export default About;
