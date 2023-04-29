import Img1 from "../../assets/images/logo/logo-mobile.png";
import Target from "../../assets/images/AboutPage/target.svg";
import Mountain from "../../assets/images/AboutPage/mountain.svg";

const History = ({ t }) => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
        <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
          <img src={Target} alt="target_img" className="w-[9rem]" />
          <h2 className="text-[3.4rem] font-bold mt-3 min620:text-[2.5rem]">
            {t("aboutUs.history.title1")}
          </h2>
          <p className="text-[16px] font-medium text-[#646464] mt-5">
            {t("aboutUs.history.description1")}
          </p>
        </div>
        {/*  */}
        <div className="w-full bg-white h-[43rem] min620:hidden">
          <img
            src={Img1}
            alt="about_img"
            className="w-full h-full object-contain bg-center"
          />
        </div>
        {/*  */}
        <div className="w-full bg-white h-[43rem] min620:hidden">
          <img
            src={Img1}
            alt="about_img"
            className="w-full h-full object-contain bg-center"
          />
        </div>
        {/*  */}
        <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
          <img src={Mountain} alt="target_img" className="w-[9rem]" />
          <h2 className="text-[3.4rem] font-bold mt-3 min620:text-[2.5rem]">
            {t("aboutUs.history.title2")}
          </h2>
          <p className="text-[16px] font-medium text-[#646464] mt-5">
            {t("aboutUs.history.description2")}
          </p>
        </div>
      </div>
    </>
  );
};
export default History;
