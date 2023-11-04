import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { UserIcon } from "../../assets/icons/icons";
import { RootState } from "../../store";

interface SessionLinksProps {
  sticky: boolean;
}

const SessionLinks = ({ sticky }: SessionLinksProps) => {
  const { t } = useTranslation();
  const { loading, accessToken, currentUser } = useSelector(
    (store: RootState) => store.sessions
  );

  // open close
  const [isOpen, setIsOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // hide dropdown on ESC press
    const hideOnEscape = (e: KeyboardEvent) => {
      // console.log(e.key)
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Hide on outside click
    const hideOnClickOutside = (e: MouseEvent) => {
      const element = refOne.current;
      if (element && !element.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      // remove event listeners
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  return (
    <>
      {!loading && accessToken ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transparent focus:outline-none bg-primary rounded-full w-10"
            type="button"
          >
            <p className="capitalize text-[2rem] leading-10 font-bold text-white">
              {currentUser.email}
            </p>
          </button>
          <div ref={refOne}>
            {isOpen && (
              <div
                onMouseLeave={() => setIsOpen(false)}
                className="absolute right-0 mt-2 w-[20rem] rounded-md shadow-2xl z-10 bg-white text-center text-xl"
              >
                <h2 className="bg-primary text-white my-4 py-2">
                  {currentUser.email}
                </h2>
                <div className="p-2">
                  {currentUser.role === "admin" && (
                    <NavLink title="Edit Profile" to="/admin">
                      <p className="block px-4 py-2 w-full text-gray hover:text-primary border-b border-primary">
                        {t("admin.title")}
                      </p>
                    </NavLink>
                  )}

                  <NavLink title="Edit Profile" to="/edit-profile">
                    <p className="block px-4 py-2 w-full text-gray hover:text-primary border-b border-primary">
                      {t("editProfile.title")}
                    </p>
                  </NavLink>

                  <NavLink title="logout" to="/logout">
                    <p className="block px-4 py-2 w-full text-gray hover:text-primary shadow-sm">
                      {t("defaults.logout")}
                    </p>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          title="login_button"
          className={`hover:text-primary ease-in duration-200 ${
            sticky ? "text-gray" : "text-white"
          }`}
        >
          <UserIcon className="h-8" />
        </NavLink>
      )}
    </>
  );
};

export default SessionLinks;
