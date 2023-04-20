import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { logoutUser } from "../../features/sessions/sessionSlice";

const Logout = () => {
  const { refreshToken } = useSelector((store) => store.sessions);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fromLocation = location.state?.from;
    const previousLocation = fromLocation
      ? fromLocation
      : { pathname: "/login" };

    if (refreshToken) {
      dispatch(logoutUser({ refreshToken }));
    }
    <Navigate to={previousLocation} state={{ from: location }} replace />;
  }, [refreshToken, dispatch, location]);

  return <>Logout</>;
};
export default Logout;
