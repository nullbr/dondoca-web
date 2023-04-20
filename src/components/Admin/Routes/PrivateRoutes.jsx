import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, accessToken } = useSelector((store) => store.sessions);

  if (accessToken) {
    return children;
  } else if (!accessToken && !loading) {
    return <Navigate to="/login" />;
  } else if (!loading) {
    return <p>Something went wrong</p>;
  }
};
export default PrivateRoutes;
