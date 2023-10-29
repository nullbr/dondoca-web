import Target from "../../assets/images/AboutPage/target.svg";
import Mountain from "../../assets/images/AboutPage/mountain.svg";

const History = ({ t }) => {
  return (
    <div className="bg-black text-white text-justify rounded-xl shadow-xl">
      <div className="grid sm:grid-cols-2 w-full grid-cols-1">
        <div className="w-full flex flex-col justify-center items-center p-10">
          <img src={Target} alt="target_img" className="w-[9rem]" />
          <h2 className="sm:text-[3.4rem] font-bold mt-3 text-[2.5rem] text-center">
            {t("aboutUs.history.title1")}
          </h2>
          <p className="text-[16px] font-medium mt-5 text-light-gray">
            {t("aboutUs.history.description1")}
          </p>
        </div>
        {/*  */}
        <div className="w-full bg-white sm:rounded-tr-xl rounded-none">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/assets%2Fbackground%2Fbackground_old.png?alt=media&token=2cca5e5b-a391-4097-8ab9-e6ced7786060"
            alt="about_img"
            className="w-full object-contain bg-center sm:rounded-tr-xl rounded-none"
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 w-full flex flex-col-reverse">
        {/*  */}
        <div className="w-full bg-white sm:rounded-bl-xl rounded-none">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/assets%2Fbackground%2Fbackground_logo.png?alt=media&token=3b4017d9-927b-4b43-87d8-cbfecf5f0fb1"
            alt="about_img"
            className="p-20 w-full object-contain bg-center"
          />
        </div>
        {/*  */}
        <div className="w-full flex flex-col justify-center items-center p-10">
          <img src={Mountain} alt="target_img" className="w-[9rem]" />
          <h2 className="sm:text-[3.4rem] font-bold mt-3 text-[2.5rem] text-center">
            {t("aboutUs.history.title2")}
          </h2>
          <p className="text-[16px] font-medium text-light-gray mt-5">
            {t("aboutUs.history.description2")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default History;
