import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

import PagesHeader from "../Shared/PagesHeader";
import ContactInfo from "./ContactInfo";
const Reviews = lazy(() => import("./Reviews"));

const Contact = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.contact") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <section>
        <PagesHeader pageTitle={t("contactUs.title")} />

        {/* contact */}
        <div className="bg-white py-20 page-padding grid sm:grid-cols-2 container gap-10 items-center grid-cols-1">
          <Suspense>
            {/* first col */}
            <ContactInfo t={t} />
            {/* second col ---*/}
            <Reviews t={t} />
          </Suspense>
        </div>
        {/* map */}
        <div className="container">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.00786099906!2d-48.468732!3d-23.5952949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf12ac1eb5a78f%3A0x6e9af4c3a2643e75!2sDondoca!5e0!3m2!1sen!2sbr!4v1681853979425!5m2!1sen!2sbr"
            style={{
              width: "100%",
              height: "45rem",
              border: "0",
            }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
