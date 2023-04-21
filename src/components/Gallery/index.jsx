import { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.gallery") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const frameRef = useRef(null);

  // const observer = useMemo(
  //   () =>
  //     new IntersectionObserver(
  //       ([entry]) => setIsIntersecting(entry.isIntersecting),
  //       { threshold: 0.7 }
  //     ),
  //   []
  // );

  // useEffect(() => {
  //   observer.observe(frameRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [frameRef, observer]);

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
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("nav.gallery")}
          </h1>
        </div>
        {/* gallery */}
        <div className="container page-padding pt-10 flex flex-col gap-6">
          <div id="galleryDiv" className="w-full"></div>
        </div>
        {/* <div
          ref={frameRef}
          className={`container page-padding py-5 ${
            !isIntersecting ? "pointer-events-none" : ""
          }`}
        >
          <iframe
            title="gallery"
            src="https://www.juicer.io/api/feeds/dondocasr/iframe?per=10&truncate=200"
            className="w-full h-full"
          ></iframe>
        </div> */}
      </section>
    </>
  );
};

export default Gallery;
