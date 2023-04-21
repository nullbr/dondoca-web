import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";

const Gallery = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.gallery") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  useEffect(() => {
    const div = document.getElementById("galleryDiv");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://www.juicer.io/embed/dondocasr/embed-code.js?per=20&truncate=200"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="relative">
        <PagesHeader pageTitle={t("nav.gallery")} />

        {/* gallery */}
        <div className="container page-padding pt-10 flex flex-col gap-6">
          <div id="galleryDiv" className="w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
