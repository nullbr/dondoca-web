import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const SessionLinks = ({ sticky }) => {
  const { t } = useTranslation();
  const { loading, accessToken, currentUser } = useSelector(
    (store) => store.sessions
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!loading && accessToken ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transparent focus:outline-none bg-signature-gold rounded-full w-10"
            type="button"
          >
            <p className="capitalize text-[2rem] leading-10 font-bold text-white">
              {currentUser.email[0]}
            </p>
          </button>
          {isOpen && (
            <div
              onMouseLeave={() => setIsOpen(false)}
              className="absolute right-0 mt-2 py-2 w-48 rounded-md shadow-xl z-10 bg-white text-gray hover:text-signature-gold"
            >
              <NavLink title="logout" to="/logout">
                <p className="block px-4 py-2 w-full text-left">
                  {t("defaults.logout")}
                </p>
              </NavLink>
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
