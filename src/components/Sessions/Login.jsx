import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("defaults.login") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // Focus on email input
    document.getElementById("email").focus();
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      errorMessages = [];
      // dispatch(resetErrorState())
    }
  }, [dispatch, t]);

  let errorMessages = [];
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const loading = false;
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData);

    console.log(entries);
    setErrors([]);

    if (entries.length < 1 || entries.email === "" || entries.password === "") {
      return setErrors([t("login.fieldsError")]);
    }

    // const response = await dispatch(loginUser(entries));
    // console.log(response);
    errorMessages = ["There was an Error"];

    if (errorMessages.length > 0) {
      return setErrors(errorMessages);
    } else {
      return <Navigate to="/admin" />;
    }
  };

  return (
    <>
      <section className="header-section pb-20">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("defaults.login")}
          </h1>
        </div>

        <div className="flex flex-col justify-center py-40 px-20 mx-auto mt-20 shadow-xl bg-black w-[55rem] min450:w-full rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col pb-20">
            {errors.length > 0 && (
              <legend className="bg-red py-5 px-10 mb-10">
                <ul className="list-disc text-[1.6rem] text-white">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </legend>
            )}
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
                  placeholder={t("login.emailExample")}
                  type="email"
                  maxLength="100"
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
                    id="password"
                    name="password"
                    className="text-[1.7rem] px-8 py-4 mb-10 w-full rounded-lg"
                    placeholder={t("login.password")}
                    type={showPassword ? "text" : "password"}
                    minLength="7"
                    maxLength="100"
                    required
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
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-signature-gold text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
                >
                  {t("defaults.login")}
                </button>
              </li>
            </ul>
          </form>

          <div className="flex gap-4 items-center mt-10 min450:flex-col">
            <p className="text-white text-[1.5rem]">{t("login.new")}</p>
            <Link
              to="/signup"
              className="text-signature-gold font-bold text-[1.5rem]"
            >
              {t("defaults.signUp")}
            </Link>
          </div>
          <div className="flex gap-4 items-center mt-10 min450:flex-col">
            <p className="text-white text-[1.5rem]">{t("login.forgotPass")}</p>
            <Link
              to="/"
              className="text-signature-gold font-bold text-[1.5rem]"
            >
              {t("login.recover")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
