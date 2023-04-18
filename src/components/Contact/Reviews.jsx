import { useEffect } from "react";
// import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";

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
    <div className="flex justify-between py-20 h-full bg-white shadow-lg items-center">
      <div className="container page-padding">
        <div id="reviews" className="p-20relative">
          <div className="relative text-center -mb-[4rem] items-center w-full flex flex-col z-10">
            <h3 className="text-[28px] font-bold underline underline-offset-8 decoration-4 decoration-signature-gold">
              {t("home.reviews")}
            </h3>
          </div>
          <div className="elfsight-app-0515e225-0af6-4cb1-b9cf-b76009e5dfae"></div>
          <div className="relative w-full h-20 -top-20 -mb-[10rem] bg-white z-[99999]"></div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
