import WhatsappLogo from "../../../assets/images/whatsapp/icons8-whatsapp-48.png";
import { ChevronUp } from "../../../assets/icons/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MessageBtn = () => {
  const { t } = useTranslation();
  const [text, setText] = useState(null);
  const [show, setShow] = useState(false);

  useState(() => {
    // display message icon on scrolldown
    const handleScroll = () => {
      window.scrollY > 10 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-[99999]">
      <div
        className={`fixed bottom-[80px] bg-gray rounded-full shadow-lg border-[1px] border-light-gray ease-in-out duration-500 h-[40px] w-[40px] hover:bg-signature-gold ${
          show ? "right-[29px]" : "-right-[100%]"
        }`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="p-[1.5px] h-full rounded-full border-[3.5px] border-white">
          <ChevronUp className="h-10 w-10 stroke-white mx-auto" />
        </div>
      </div>
      <div
        className={`fixed bottom-[29px] bg-white rounded-full shadow-lg ease-in-out duration-500 ${
          show ? "right-[29px]" : "-right-[100%]"
        } ${text ? "pr-[40px]" : "pr-[15px]"}`}
      >
        <p className="h-[40px] text-xl p-5 text-gray">{text}</p>
      </div>
      <a
        className={`fixed bottom-10 nav-btn-hover ease-in-out duration-500 ${
          show ? "right-10" : "-right-[100%]"
        }`}
        onMouseEnter={() => {
          setText("Como podemos ajudar?");
        }}
        onMouseLeave={() => {
          setText(null);
        }}
        href={`https://wa.me/${t(
          "contactUs.phoneNumberInteger"
        )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsappLogo} alt="Whatsapp" />
      </a>
    </div>
  );
};
export default MessageBtn;
