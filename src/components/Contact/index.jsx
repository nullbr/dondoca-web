import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";

const Contact = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.contact") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  });

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("contactUs.title")}
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              {t("contactUs.subTitle")}
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              {t("contactUs.pitch")}
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.address")}
                </h3>
                <p className="text-[15px] font-medium text-[#646464]">
                  {t("contactUs.addressLine1")}
                  <br />
                  {t("contactUs.addressLine2")}
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.hours")}
                </h3>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>
                    {t("contactUs.tueSat")}: {t("contactUs.tueSatTime")}
                  </p>
                  <p>
                    {t("contactUs.sunMon")}: {t("contactUs.sunMonTime")}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("contactUs.title")}
                </h3>
                <div className="text-[15px] font-medium text-[#646464]">
                  <a href={`tel:${t("contactUs.phoneNumber")}`}>
                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                      <i className="fa-solid fa-phone text-signature-gold"></i>
                      &nbsp; {t("contactUs.phoneNumber")}
                    </p>
                  </a>
                  <a href={`mailto:${t("contactUs.email")}`}>
                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-signature-gold cursor-pointer ease-in duration-200">
                      <i className="fa-solid fa-envelope text-signature-gold"></i>
                      &nbsp; {t("contactUs.email")}
                    </p>
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-signature-gold">
                  {t("defaults.followUs")}
                </h3>
                <a
                  href={t("defaults.instagram")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-medium text-black flex gap-5"
                >
                  <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-signature-gold ease-in duration-200 hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <div className="flex h-full bg-[#f8f8f8] items-center my-14">
            <form className="flex flex-col w-full pr-[50px] pl-[45px] md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
              <h3 className="text-[28px] font-bold mb-14 underline underline-offset-8 decoration-4 decoration-signature-gold">
                Leave Us Your Info
              </h3>
              <input
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                placeholder="Full Name *"
                type="text"
              ></input>
              <input
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                placeholder="Email Address *"
                type="email"
              ></input>
              <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
                <option>Select Class</option>
                <option>Body Building</option>
                <option>Boxing</option>
                <option>Running</option>
                <option>Fitness</option>
                <option>Yoga</option>
                <option>Workout</option>
                <option>Katate</option>
                <option>Meditation</option>
                <option>Cycling</option>
              </select>
              <textarea
                placeholder="Comment"
                className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-signature-gold w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
              >
                submit now
              </button>
            </form>
          </div>
        </div>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
