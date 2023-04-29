import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

import Loader from "../Shared/Loader";
import PagesHeader from "../Shared/PagesHeader";
const AboutSection = lazy(() => import("./AboutSection"));
const Professionals = lazy(() => import("./Professionals"));
// import History from "./History";

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

        <div className="container page-padding py-[5rem] min620:py-4 flex flex-col justify-center gap-20">
          <Suspense fallback={<Loader />}>
            <AboutSection />
            <Professionals t={t} />
            {/* <History t={t} /> */}
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default About;
