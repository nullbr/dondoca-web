import qualityImg from "../../../assets/images/home/quality.svg";
import priceImg from "../../../assets/images/home/price.svg";
import spaceImg from "../../../assets/images/home/space.png";
import { useTranslation } from "react-i18next";

function AboutCarts() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]">
        <img src={qualityImg} alt="box_img" className="w-[75px] mb-4" />
        <h1 className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.quality.title")}
        </h1>
        <p className="text-[15px] text-[#646464] font-medium leading-2 w-full">
          {t("home.about.quality.description")}
        </p>
      </div>

      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 min620:mt-4 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]">
        <img src={spaceImg} alt="box_img" className="w-[75px] mb-4" />
        <p className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.space.title")}
        </p>
        <p className="text-[15px] text-[#646464] font-medium leading-2 w-full">
          {t("home.about.space.description")}
        </p>
      </div>

      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 min620:mt-4 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]">
        <img src={priceImg} alt="box_img" className="w-[75px] mb-4" />
        <p className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.price.title")}
        </p>
        <p className="text-[15px] text-[#646464] font-medium leading-2 w-full">
          {t("home.about.price.description")}
        </p>
      </div>
    </>
  );
}

export default AboutCarts;
