import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const accessToken = false;
  const loading = false;

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
