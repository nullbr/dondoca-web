import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";
import { EyeIcon, EyeOffIcon } from "../../assets/icons/icons";
import { useMutation } from "@tanstack/react-query";
import { loginWithCredentials } from "../../api/sessionAPI";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import ResponseError from "../../lib/ResponseError";
import { SessionResponse } from "../../types/sessions";
import { setSession } from "../../features/app/appSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("defaults.login") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // Focus on email input
    document?.getElementById("email")?.focus();
  }, [t]);

  // Login User
  const [showPassword, setShowPassword] = useState(false);

  const loginUserMutation = useMutation({
    mutationFn: loginWithCredentials,
    onSuccess: (data: SessionResponse) => {
      dispatch(setSession(data));

      toast.success(t("login.success"));

      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
    onError: (err: AxiosError) => ResponseError({ err }),
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData);

    if (!entries || entries.email === "" || entries.password === "") {
      toast.error(t("login.fieldsError"));
    }

    const credentials = {
      email: entries.email as string,
      password: entries.password as string,
    };

    loginUserMutation.mutate(credentials);
  };

  return (
    <section className="pb-20">
      <PagesHeader pageTitle={t("defaults.login")} />

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
                placeholder={t("login.emailExample") || ""}
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
                  id="password"
                  name="password"
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full rounded-lg"
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
                disabled={loginUserMutation.isPending}
                className="bg-primary text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
              >
                {t("defaults.login")}
              </button>
            </li>
          </ul>
        </form>

        <div className="flex gap-4 items-center mt-10">
          <p className="text-white text-[1.5rem]">{t("login.new")}</p>
          <Link to="/signup" className="text-primary font-bold text-[1.5rem]">
            {t("defaults.signUp")}
          </Link>
        </div>
        <div className="flex gap-4 items-center mt-10">
          <p className="text-white text-[1.5rem]">{t("login.forgotPass")}</p>
          <Link to="/" className="text-primary font-bold text-[1.5rem]">
            {t("login.recover")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
