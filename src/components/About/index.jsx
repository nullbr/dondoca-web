import "./index.css";
import { useEffect } from "react";
import AboutSection from "./AboutSection";
import Professionals from "./Professionals";
import History from "./History";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

const About = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.about") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

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
