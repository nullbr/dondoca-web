import "./Styles.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";
import { EyeIcon, EyeOffIcon } from "../../assets/icons/icons";
import { useSignUpUser } from "../../hooks/Users/mutations";
import { EditUserPayload } from "../../types/sessions";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const signUpUserMutation = useSignUpUser();

  useEffect(() => {
    document.title = t("defaults.signUp") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // Focus on email input
    document?.getElementById("email")?.focus();
  }, [dispatch, t]);

  // Sign up user
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData);

    if (
      !entries ||
      entries.email === "" ||
      entries.password === "" ||
      entries.confirmPassword === ""
    ) {
      toast.error(t("login.fieldsError"));
      return;
    } else if (entries.password !== entries.confirmPassword) {
      toast.error(t("signUp.passwordNoMatch"));
      return;
    }

    const payload: EditUserPayload = {
      registration: {
        email: entries.email as string,
        password: entries.password as string,
        password_confirmation: entries.confirmPassword as string,
      },
    };

    signUpUserMutation.mutate(payload);
  };

  // Check if passwords match
  const checkPasswordMatch = () => {
    const password = passwordRef?.current;
    const confirmPassword = confirmPasswordRef?.current;

    if (!password || !confirmPassword) return;

    password.value === confirmPassword.value
      ? (confirmPassword.style.outlineColor = "#22c55e")
      : (confirmPassword.style.outlineColor = "#ef4444");
  };

  return (
    <>
      <section className="pb-20">
        <PagesHeader pageTitle={t("defaults.signUp")} />

        <div className="flex flex-col justify-center py-40 px-20 mx-auto mt-20 shadow-xl bg-black w-[55rem] rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col pb-20">
            <ul>
              <li>
                <label
                  htmlFor="email"
                  className="text-[2rem] text-white mb-3 font-medium capitalize"
                >
                  {t("login.email")} *
                </label>
                <input
                  id="email"
                  name="email"
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
                  placeholder={t("login.emailExample") || "" || ""}
                  type="email"
                  maxLength={100}
                  required
                />
              </li>
              <li>
                <label
                  htmlFor="password"
                  className="text-[2rem] text-white mb-3 font-medium capitalize"
                >
                  {t("login.password")} *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
                    placeholder={t("login.password") || ""}
                    type={showPassword ? "text" : "password"}
                    minLength={7}
                    maxLength={100}
                    required
                  />
                  <button
                    id="showPasswordButton"
                    type="button"
                    className="absolute top-6 right-5 text-xl"
                    aria-label={t("login.showPassword") as string}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-8" />
                    ) : (
                      <EyeIcon className="h-6" />
                    )}
                  </button>
                </div>
              </li>
              <li>
                <label
                  htmlFor="confirmPassword"
                  className="text-[2rem] text-white mb-3 font-medium"
                >
                  {t("signUp.repeatPass")} *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    ref={confirmPasswordRef}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-red-500 rounded-lg"
                    placeholder={t("login.password") || ""}
                    type={showPassword ? "text" : "password"}
                    minLength={7}
                    maxLength={100}
                    required
                    onChange={() => checkPasswordMatch()}
                  />
                  <button
                    id="showConfirmPasswordButton"
                    type="button"
                    className="absolute top-6 right-5 text-xl"
                    aria-label={t("login.showPassword") || ""}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-8" />
                    ) : (
                      <EyeIcon className="h-6" />
                    )}
                  </button>
                </div>
              </li>
              <li>
                <button
                  type="submit"
                  disabled={signUpUserMutation.isPending}
                  className="bg-primary text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
                >
                  {t("defaults.signUp")}
                </button>
              </li>
            </ul>
          </form>

          <div className="flex gap-4 items-center mt-10">
            <p className="text-white text-[1.5rem]">{t("signUp.current")}</p>
            <Link to="/login" className="text-primary font-bold text-[1.5rem]">
              {t("defaults.login")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
