import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import Prof1 from "../../assets/images/professionals/gisely.png";
import Prof2 from "../../assets/images/professionals/ju.png";
import { useState } from "react";

function Professionals({ t }) {
  const [imgHover, setImgHover] = useState(false);

  const professionals = [
    {
      image: Prof1,
      name: "Gisely Rosa",
      job: "Hair Stylist",
      instagram: "https://www.instagram.com/giselyr",
    },
    {
      image: Prof2,
      name: "Juarezita Rosa",
      job: "Manicure & Pedicure",
      instagram: "https://www.instagram.com/juarezita_rosa",
    },
  ];

  return (
    <div className="p-20 bg-white shadow-lg flex flex-col gap-20">
      {/* title div -- */}
      <div className="flex flex-col items-center text-center relative self-center">
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          {t("aboutUs.team.title")}
        </p>
        <img
          src={TitleBg}
          alt="text_bg"
          className="w-[21rem] relative -top-[55px] -mb-10"
        />

        <h2 className="text-[3.4rem] font-bold mb-4">
          {t("aboutUs.team.subtitle")}
        </h2>
        <p className="text-[#646464] font-medium text-[15px] max-w-[900px] ">
          {t("aboutUs.team.description")}
        </p>
      </div>

      {/* professionals div -- */}
      <div className="flex justify-center gap-[5rem] md1200:flex-wrap">
        {professionals.map((professional) => (
          <div
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(true)}
            key={professional.name}
            className="flex flex-col justify-center"
          >
            {/* professional img */}
            <img
              src={professional.image}
              alt="professional"
              style={{ transition: "all 0.3s" }}
              className={`h-[33rem] ${imgHover ? "hover:h-[34rem]" : ""}`}
            />
            {/* professional description */}
            <div className="bg-white w-full text-center shadow-lg z-10 rounded-[6px] px-[20px] py-[30px] border-b-4 border-signature-gold">
              <h3 className="font-bold text-[2.4rem] ">{professional.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464]">
                {professional.job}
              </p>
              <a
                href={professional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[#646464] w-full justify-center mt-5 text-[1.6rem]"
              >
                <i className="fa-brands fa-instagram" />
                <span className="text-sm pl-1">Instagram</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professionals;
