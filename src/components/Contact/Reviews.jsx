import { useEffect } from "react";

const Reviews = ({ t }) => {
  useEffect(() => {
    const div = document.querySelector("#reviews");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://static.elfsight.com/platform/platform.js"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.setAttribute("data-use-service-core", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://search.google.com/local/writereview?placeid=ChIJj6e1HqwSz5QRdT5kosP0mm4"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between py-20 h-full bg-black shadow-xl rounded-xl items-center"
    >
      <div className="container page-padding">
        <div id="reviews" className="p-20relative">
          <div className="relative text-center -mb-[4rem] items-center flex flex-col z-10 bg-black w-[70%] mx-auto">
            <h3 className="text-[3.4rem] min620:text-[2.5rem] text-white font-bold underline underline-offset-8 decoration-4 decoration-signature-gold">
              {t("home.reviews")}
            </h3>
          </div>
          <div className="elfsight-app-0515e225-0af6-4cb1-b9cf-b76009e5dfae"></div>
          <div className="relative w-[70%] h-20 -top-20 -mb-[10rem] mx-auto bg-black z-[99999]"></div>
        </div>
      </div>
    </a>
  );
};
export default Reviews;
