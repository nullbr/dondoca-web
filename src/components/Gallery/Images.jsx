import { useEffect } from "react";

const Images = () => {
  useEffect(() => {
    const div = document.getElementById("galleryDiv");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://www.juicer.io/embed/dondocasr/embed-code.js?per=20&truncate=150"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <div className="container page-padding pt-10 flex flex-col gap-6">
      {/* gallery */}
      <div id="galleryDiv" className="w-full"></div>
    </div>
  );
};
export default Images;
