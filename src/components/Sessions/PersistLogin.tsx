import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getRefreshToken } from "../../lib/localStore";
import { useQuery } from "@tanstack/react-query";
import { requestAccessTokenWithRefreshToken } from "../../api/sessionAPI";
import { setSession } from "../../features/app/appSlice";
import { SessionResponse } from "../../types/sessions";
import { useEffect } from "react";

const PersistLogin = () => {
  const dispatch = useDispatch();
  const refreshToken = getRefreshToken();

  const { data, isSuccess, isError } = useQuery({
    queryKey: ["refreshAccessToken", refreshToken || ""],
    queryFn: () => requestAccessTokenWithRefreshToken(refreshToken || ""),
    enabled: !!refreshToken,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setSession(data as SessionResponse));
    }
  }, [data, isSuccess]);

  if (isError) {
    toast.error("Por favor, faça login novamente.");
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default PersistLogin;
