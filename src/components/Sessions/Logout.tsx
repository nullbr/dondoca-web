import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/sessions/sessionSlice";
import { RootState } from "../../store";

const Logout = () => {
  const { refreshToken } = useSelector((store: RootState) => store.sessions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (refreshToken) {
      dispatch(logoutUser({ refreshToken }));
    }
    navigate("/");
  }, [dispatch, navigate, refreshToken]);

  return <>Logout</>;
};
export default Logout;
