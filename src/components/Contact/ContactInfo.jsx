import {
  EnvelopeIcon,
  InstagramIcon,
  PhoneIcon,
} from "../../assets/icons/icons";

const ContactInfo = ({ t }) => {
  return (
    <div className="w-[60%] flex flex-col mx-auto sm:block md:w-full sm:w-[90%]">
      <h2 className="text-center text-black sm:text-[3.4rem] text-[2.5rem] font-bold leading-[1.2]">
        {t("contactUs.subTitle")}
      </h2>
      <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
        {t("contactUs.pitch")}
      </p>
      <div className="grid sm:grid-cols-2 grid-rows-2 gap-y-20 grid-cols-1 mx-auto text-center">
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-primary">
            {t("contactUs.address")}
          </h3>
          <a
            href={t("contactUs.addressUrl")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[15px] font-medium text-[#646464] hover:text-primary cursor-pointer ease-in duration-200">
              {t("contactUs.addressLine1")}
              <br />
              {t("contactUs.addressLine2")}
            </p>
          </a>
        </div>
        {/* hours */}
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-primary">
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
        {/* contact info */}
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-primary">
            {t("contactUs.title")}
          </h3>
          <div className="text-[15px] font-medium text-[#646464]">
            <a
              href={`https://wa.me/${t(
                "contactUs.phoneNumberInteger"
              )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex text-[1.6rem] justify-center items-center font-medium text-[#000000b1] hover:text-primary cursor-pointer ease-in duration-200">
                <PhoneIcon className="h-6" />
                &nbsp; {t("contactUs.phoneNumber")}
              </p>
            </a>
            <a href={`mailto:${t("contactUs.email")}`}>
              <p className="flex text-[1.6rem] justify-center items-center font-medium text-[#000000b1] hover:text-primary cursor-pointer ease-in duration-200">
                <EnvelopeIcon className="h-6" />
                &nbsp; {t("contactUs.email")}
              </p>
            </a>
          </div>
        </div>
        {/* social */}
        <div className="flex flex-col relative items-center">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-primary">
            {t("defaults.followUs")}
          </h3>
          <a
            href={t("defaults.instagram")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-primary ease-in duration-200 hover:text-white w-fit"
          >
            <InstagramIcon className="h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
