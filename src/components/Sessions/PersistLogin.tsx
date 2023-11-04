import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { refreshAccessToken } from "../../features/sessions/sessionSlice";
import { Toaster } from "react-hot-toast";

const PersistLogin = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector((store) => store.sessions);

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        dispatch(refreshAccessToken({ refreshToken }));
      } catch (error) {
        console.log(error);
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken, dispatch]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};
export default PersistLogin;
