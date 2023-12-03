import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

// Permit logged in users that are admin
const AdminRoutes = ({ children }: { children: React.ReactNode }) => {
  const { session, currentUser } = useSelector((store: RootState) => store.app);

  if (session?.access_token && currentUser?.user.role === "admin") {
    return children;
  } else if (session?.access_token) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default AdminRoutes;
