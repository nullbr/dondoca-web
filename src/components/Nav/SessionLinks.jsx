import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Avatar from "../../assets/images/avatar/avatar1.svg";

const SessionLinks = ({ sticky }) => {
  const { t } = useTranslation();
  const { loading, accessToken } = useSelector((store) => store.sessions);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {});

  console.log(loading, accessToken);

  const handleLogout = () => {
    // handle logout logic here
  };

  useEffect(() => {
    const handleClose = () => setIsOpen(false);

    const button = document.querySelector("#avatar-btn");
    button.addEventListener("focusout", handleClose);

    return () => {
      button.removeEventListener("focusout", handleClose);
    };
  }, []);

  return (
    <>
      {!loading && accessToken ? (
        <div className="relative">
          <button
            id="avatar-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="transparent focus:outline-none"
            type="button"
          >
            <img
              src={Avatar}
              alt="avatar"
              className="h-[26px] rounded-full border-1 border-gray"
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 rounded-md shadow-xl z-10 bg-white text-gray hover:text-signature-gold">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 w-full text-left"
              >
                {t("defaults.logout")}
              </button>
            </div>
          )}
        </div>
      ) : (
        <NavLink to="/login" title="login_button">
          <i
            className={`fa-regular fa-user text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
              sticky ? "text-gray" : "text-white"
            }`}
          ></i>
        </NavLink>
      )}
    </>
  );
};
export default SessionLinks;
