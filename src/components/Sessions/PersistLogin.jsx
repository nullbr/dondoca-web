import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        // dispatch(refreshAccessToken)
        console.log("Refreshing access token");
      } catch (error) {
        console.log(error);
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return <>{loading ? <p>Loading...</p> : <Outlet />}</>;
};
export default PersistLogin;
