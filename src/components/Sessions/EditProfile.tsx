import "./Styles.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorState } from "../../features/sessions/sessionSlice";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";
import { EyeIcon, EyeOffIcon } from "../../assets/icons/icons";
import { RootState } from "../../store";
import { editUserWithToken } from "../../api/sessionAPI";
import { Credentials, UserResponse } from "../../types/sessions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { KEYS } from "../../hooks/Users/queries";
import { AxiosError } from "axios";
import ResponseError from "../../lib/ResponseError";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const passwordRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const confirmPasswordRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  useEffect(() => {
    document.title = t("editProfile.title") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // Focus on email input
    document?.getElementById("email")?.focus();

    // reset error messages
    dispatch(resetErrorState());
  }, [dispatch, t]);

  // Sign up user
  const { session } = useSelector((state: RootState) => state.app);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const queryClient = useQueryClient();

  const editUserMutation = useMutation({
    mutationFn: editUserWithToken,
    onSuccess: (data: UserResponse) => {
      queryClient.invalidateQueries({
        queryKey: [KEYS.GET_USER, session?.access_token || ""],
      });
      toast.success(t("login.success"));

      if (data.user.role === "admin") {
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
    const shouldUpdatePassword =
      entries.password !== "" || entries.password !== "";
    const shouldEditProfile = entries.email !== "" || shouldUpdatePassword;

    if (!entries || !shouldEditProfile) {
      toast.error(t("editProfile.fieldsError"));
      return;
    }

    if (shouldUpdatePassword && entries.password !== entries.confirmPassword) {
      toast.error(t("signUp.passwordNoMatch"));
      return;
    }

    if (!entries.currentPassword || entries.currentPassword === "") {
      toast.error(t("editProfile.noCurrentPassword"));
      return;
    }

    const payload: Credentials = {
      email: entries.email as string,
      password: entries.password as string,
      currentPassword: entries.currentPassword as string,
      accessToken: session?.access_token || "",
    };

    editUserMutation.mutate(payload);
  };

  // Check if passwords match
  const checkPasswordMatch = () => {
    const passwordInput = passwordRef?.current;
    const confirmPasswordInput = confirmPasswordRef?.current;

    if (!passwordInput || !confirmPasswordInput) return false;

    passwordInput.value === confirmPasswordInput.value
      ? (passwordInput.style.outlineColor = "#22c55e")
      : (confirmPasswordInput.style.outlineColor = "#ef4444");
  };

  return (
    <section className="pb-20">
      <PagesHeader pageTitle={t("editProfile.title")} />

      <div className="flex flex-col justify-center py-40 px-20 mx-auto mt-20 shadow-xl bg-black sm:w-[55rem] w-full rounded-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col pb-20">
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
                placeholder={t("login.emailExample") || ""}
                type="email"
                maxLength={100}
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
                  placeholder={t("login.password") || ""}
                  type={showPassword ? "text" : "password"}
                  minLength={7}
                  maxLength={100}
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
                  placeholder={t("login.password") || ""}
                  type={showPassword ? "text" : "password"}
                  minLength={7}
                  maxLength={100}
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
            <hr className="border-2 border-primary rounded-full mb-5" />
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
                  placeholder={t("editProfile.currentPassword") || ""}
                  type={showCurrentPassword ? "text" : "password"}
                  minLength={7}
                  maxLength={100}
                  required
                />
                <button
                  id="showCurrentPasswordButton"
                  type="button"
                  className="absolute top-6 right-5 text-xl"
                  aria-label={t("editProfile.showCurrentPassword") || ""}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
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
                disabled={editUserMutation.isPending}
                className="bg-primary text-white py-4 font-medium text-[2rem] w-full mt-10 rounded-lg"
              >
                {t("editProfile.title")}
              </button>
            </li>
          </ul>
        </form>

        <div className="flex gap-4 items-center mt-10 sm:flex-row flex-col">
          <p className="text-white text-[1.5rem]">{t("editProfile.newUser")}</p>
          <Link to="/signup" className="text-primary font-bold text-[1.5rem]">
            {t("defaults.signUp")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
