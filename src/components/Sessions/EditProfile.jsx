import "./Styles.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  resetErrorState,
} from "../../features/sessions/sessionSlice";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import ErrorMessages from "./shared/ErrorMessages";
import PagesHeader from "../Shared/PagesHeader";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    document.title = t("editProfile.title") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // Focus on email input
    document.getElementById("email").focus();

    // reset error messages
    dispatch(resetErrorState());
  }, [dispatch, t]);

  // Sign up user
  const { loading, errorMessages, accessToken } = useSelector(
    (store) => store.sessions
  );
  const [errors, setErrors] = useState(errorMessages);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  // Check form entries
  const validEntries = (entries) => {
    setErrors([]);

    const shouldUpdatePassword =
      entries.password !== "" || entries.password !== "";
    const shouldEditProfile = entries.email !== "" || shouldUpdatePassword;

    if (entries.length < 1 || !shouldEditProfile) {
      setErrors([t("editProfile.fieldsError")]);
    } else if (
      shouldUpdatePassword &&
      entries.password !== entries.confirmPassword
    ) {
      setErrors([t("signUp.passwordNoMatch")]);
    } else if (!entries.currentPassword || entries.currentPassword === "") {
      setErrors([t("editProfile.noCurrentPassword")]);
    }

    if (errors.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData);

    if (!validEntries(entries)) {
      return null;
    }

    const payload = {
      email: entries.email,
      password: entries.password,
      currentPassword: entries.currentPassword,
      accessToken: accessToken,
    };

    const response = await dispatch(editUser(payload));

    if (response.errors || response.error) {
      return null;
    }

    navigate("/");
  };

  // Check if passwords match
  const checkPasswordMatch = () => {
    const password = passwordRef?.current?.value;
    const confirmPassword = confirmPasswordRef?.current?.value;

    password === confirmPassword
      ? (confirmPasswordRef.current.style.outlineColor = "#22c55e")
      : (confirmPasswordRef.current.style.outlineColor = "#ef4444");
  };

  return (
    <section className="pb-20">
      <PagesHeader pageTitle={t("editProfile.title")} />

      <div className="flex flex-col justify-center py-40 px-20 mx-auto mt-20 shadow-xl bg-black w-[55rem] min450:w-full rounded-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col pb-20">
          <ErrorMessages errors={errors} errorMessages={errorMessages} />
          <ul>
            <li>
              <label
                htmlFor="email"
                className="text-[2rem] text-white mb-3 font-medium capitalize"
              >
                {t("login.email")}
              </label>
              <input
                id="email"
                name="email"
                className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
                placeholder={t("login.emailExample")}
                type="email"
                maxLength="100"
              />
            </li>
            <li>
              <label
                htmlFor="password"
                className="text-[2rem] text-white mb-3 font-medium capitalize"
              >
                {t("login.password")}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
                  placeholder={t("login.password")}
                  type={showPassword ? "text" : "password"}
                  minLength="7"
                  maxLength="100"
                />
                <button
                  id="showPasswordButton"
                  type="button"
                  className="absolute top-6 right-5 text-xl"
                  aria-label={t("login.showPassword")}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  )}
                </button>
              </div>
            </li>
            <li>
              <label
                htmlFor="confirmPassword"
                className="text-[2rem] text-white mb-3 font-medium"
              >
                {t("signUp.repeatPass")}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  ref={confirmPasswordRef}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-red-500 rounded-lg"
                  placeholder={t("login.password")}
                  type={showPassword ? "text" : "password"}
                  minLength="7"
                  maxLength="100"
                  onChange={() => checkPasswordMatch()}
                />
                <button
                  id="showConfirmPasswordButton"
                  type="button"
                  className="absolute top-6 right-5 text-xl"
                  aria-label={t("login.showPassword")}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  )}
                </button>
              </div>
            </li>
            <hr className="border-2 border-signature-gold rounded-full mb-5" />
            <li>
              <label
                htmlFor="currentPassword"
                className="text-[2rem] text-white mb-3 font-medium capitalize"
              >
                {t("editProfile.currentPassword")} *
              </label>
              <div style={{ position: "relative" }}>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
                  placeholder={t("editProfile.currentPassword")}
                  type={showCurrentPassword ? "text" : "password"}
                  minLength="7"
                  maxLength="100"
                  required
                />
                <button
                  id="showCurrentPasswordButton"
                  type="button"
                  className="absolute top-6 right-5 text-xl"
                  aria-label={t("editProfile.showCurrentPassword")}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  )}
                </button>
              </div>
            </li>
            <li>
              <button
                type="submit"
                disabled={loading}
                className="bg-signature-gold text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
              >
                {t("editProfile.title")}
              </button>
            </li>
          </ul>
        </form>

        <div className="flex gap-4 items-center mt-10 min450:flex-col">
          <p className="text-white text-[1.5rem]">{t("editProfile.newUser")}</p>
          <Link
            to="/signup"
            className="text-signature-gold font-bold text-[1.5rem]"
          >
            {t("defaults.signUp")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
