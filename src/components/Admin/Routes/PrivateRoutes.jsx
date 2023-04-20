import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, accessToken } = useSelector((store) => store.sessions);

  if (accessToken) {
    return children;
  } else if (loading) {
    return <p>Loading...</p>;
  } else if (!accessToken && !loading) {
    return <Navigate to="/login" />;
  } else {
    return <p>Something went wrong</p>;
  }
};
export default PrivateRoutes;
