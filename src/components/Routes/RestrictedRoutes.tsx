import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

// Permit users to access if logged in
const RestrictedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSelector((state: RootState) => state.app);

  if (session) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default RestrictedRoutes;
