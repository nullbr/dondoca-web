import WhatsappLogo from "../../../assets/images/whatsapp/icons8-whatsapp-48.png";
import { useState } from "react";

const MessageBtn = () => {
  const [text, setText] = useState(null);
  const [show, setShow] = useState(false);

  // display message icon on scrolldown
  const handleScroll = () => {
    window.scrollY > 10 ? setShow(true) : setShow(false);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`fixed bottom-[29px] bg-white rounded-full shadow-lg ease-in-out duration-500 ${
          show ? "right-[29px]" : "-right-[100%]"
        } ${text ? "pr-[40px]" : "pr-[15px]"}`}
      >
        <p className="h-[40px] text-xl p-5 text-gray">{text}</p>
      </div>
      <a
        onMouseEnter={(e) => {
          setText("Como podemos ajudar?");
        }}
        onMouseLeave={(e) => {
          setText(null);
        }}
        className={`fixed bottom-10 nav-btn-hover ease-in-out duration-500 ${
          show ? "right-10" : "-right-[100%]"
        }`}
        href="https://wa.me/5511978228466?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsappLogo} alt="Whatsapp" />
      </a>
    </div>
  );
};
export default MessageBtn;
