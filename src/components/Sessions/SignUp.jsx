import { useState, useEffect, useRef } from "react";
import { Global } from "../../context/GlobalContext";
import { Link, Navigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const SignUp = () => {
  const { t, setScrollY } = Global();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    document.title = t("defaults.signUp") + " - " + t("defaults.pageTitle");
    setScrollY(125);

    // Focus on email input
    document.getElementById("email").focus();
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      errorMessages = [];
      // dispatch(resetErrorState())
    }
  });

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

    if (
      entries.length < 1 ||
      entries.email === "" ||
      entries.password === "" ||
      entries.confirmPassword === ""
    ) {
      return setErrors([t("login.fieldsError")]);
    } else if (entries.password !== entries.confirmPassword) {
      return setErrors([t("signUp.passwordNoMatch")]);
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

  // Check if passwords match
  const checkPasswordMatch = () => {
    const password = passwordRef?.current?.value;
    const confirmPassword = confirmPasswordRef?.current?.value;

    password === confirmPassword
      ? (confirmPasswordRef.current.style.outlineColor = "#22c55e")
      : (confirmPasswordRef.current.style.outlineColor = "#ef4444");
  };

  return (
    <>
      <section className="header-section pb-20">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            {t("defaults.signUp")}
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
                    ref={passwordRef}
                    id="password"
                    name="password"
                    className="text-[1.7rem] px-8 py-4 mb-10 w-full valid:outline-green-500 invalid:outline-red-500 rounded-lg"
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
                    placeholder={t("login.password")}
                    type={showPassword ? "text" : "password"}
                    minLength="7"
                    maxLength="100"
                    required
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
              <li>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-signature-gold text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
                >
                  {t("defaults.signUp")}
                </button>
              </li>
            </ul>
          </form>

          <div className="flex gap-4 items-center mt-10 min450:flex-col">
            <p className="text-white text-[1.5rem]">{t("signUp.current")}</p>
            <Link
              to="/login"
              className="text-signature-gold font-bold text-[1.5rem]"
            >
              {t("defaults.login")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
