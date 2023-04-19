import { useEffect, useState, useRef, useMemo } from "react";
import { Global } from "../../context/GlobalContext";

const Gallery = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.gallery") + " - " + t("defaults.pageTitle");
    setScrollY(125);
  });

  const [isIntersecting, setIsIntersecting] = useState(false);
  const frameRef = useRef(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { threshold: 0.7 }
      ),
    []
  );

  useEffect(() => {
    observer.observe(frameRef.current);

    return () => {
      observer.disconnect();
    };
  }, [frameRef, observer]);

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("nav.gallery")}
          </h1>
        </div>
        <div
          ref={frameRef}
          className={`container page-padding py-5 h-screen ${
            !isIntersecting && "pointer-events-none"
          }`}
        >
          <iframe
            title="gallery"
            src="https://www.juicer.io/api/feeds/brmariano13/iframe?per=10&truncate=100"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Gallery;
