import { InstagramIcon } from "../../../assets/icons/icons";
import MainButton from "../../Shared/MainButton";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <section className="hero-section w-full h-full flex justify-center text-center flex-col sm:flex-row">
        <div className="container-hero">
          {/* hero section */}
          <div className="animate-fade-in flex flex-col text-white justify-center text-center h-full px-20 gap-20">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/assets%2Fbackground%2Fbackground_logo.png?alt=media&token=3b4017d9-927b-4b43-87d8-cbfecf5f0fb1"
              alt="text_bg"
              className="max-w-full sm:max-h-[40vh] max-h-full"
            />

            <div className="flex w-full justify-center">
              <MainButton
                color="text-white"
                bg="bg-transparent"
                text={t("services.title")}
                goTo="/services"
                arrowColor="text-primary"
                hover="hover:bg-white hover hover:text-black"
              />
            </div>
          </div>
        </div>
        {/* socials */}
        <a
          href={t("defaults.instagram") || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in flex flex-row-reverse sm:-rotate-90 text-white w-fit
          sm:absolute top-1/2 right-0 items-center -rotate-0 static self-center pt-10 sm:pt-0"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">
            {t("defaults.followUs")}
          </p>
          <span className="w-[35px] bg-primary h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7">
            <InstagramIcon className="h-8 rotate-0 sm:rotate-90 hover:text-primary cursor-pointer ease-in duration-200" />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Hero;
