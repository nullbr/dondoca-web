import { useMutation } from "@tanstack/react-query";
import {
  loginWithCredentials,
  logoutUserWithToken,
} from "../../api/sessionAPI";
import { SessionResponse } from "../../types/sessions";
import { deleteSession, setSession } from "../../features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import ResponseError from "../../lib/ResponseError";
import { RootState } from "../../store";

export const useLoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return useMutation({
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
};

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { refreshToken } = useSelector((store: RootState) => store.sessions);

  return useMutation({
    mutationFn: () => logoutUserWithToken(refreshToken || ""),
    onSuccess: () => {
      dispatch(deleteSession());

      toast.success(t("logout.success"));

      navigate("/");
    },
    onError: (err: AxiosError) =>
      ResponseError({ err, message: t("logout.error") || "" }),
  });
};
