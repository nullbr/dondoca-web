import { useEffect } from "react";
import AboutSection from "./AboutSection";
import Professionals from "./Professionals";
import History from "./History";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";

const About = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.about") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <section>
        <PagesHeader pageTitle={t("nav.about")} />

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
