import TitleBg from "../../images/background/background_logo.png";
import MainButton from "../MainButton";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <section
        id="home"
        className="hero-section w-full h-full flex justify-center text-center min800:flex-col"
      >
        <div className="container-hero">
          {/* hero section */}
          <div className="flex flex-col text-white justify-center text-center h-full px-20 gap-20">
            <img
              src={TitleBg}
              alt="text_bg"
              className="max-w-full max-h-[40vh] min620:max-h-full"
            />

            <div className="flex w-full justify-center">
              <MainButton
                color={`text-black`}
                bg={`bg-white`}
                text="nossos serviços"
                goTo="/classes"
                arrowColor="text-signature-gold"
                hover={`hover:bg-gray`}
              />
            </div>
          </div>
        </div>
        {/* socials */}
        <a
          href="https://www.instagram.com/dondocasr"
          target="blank"
          referrerPolicy="none"
          className="flex flex-row-reverse -rotate-90 text-white w-fit
          absolute top-1/2 right-0 items-center min800:-rotate-0 min800:static min800:self-center min800:pt-10"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">
            social
          </p>
          <span className="w-[35px] bg-signature-gold h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-signature-gold  fa-instagram text-3xl cursor-pointer ease-in duration-200 min800:rotate-0"></i>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Hero;
