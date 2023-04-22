import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Permit logged in users that are admin
const AdminRoutes = ({ children }) => {
  const { t } = useTranslation();
  const { loading, accessToken, currentUser } = useSelector(
    (store) => store.sessions
  );

  if (accessToken && currentUser.role === "admin") {
    return children;
  } else if (accessToken) {
    console.log(2);
    return <Navigate to="/" />;
  } else if (!accessToken && !loading) {
    console.log(3);
    return <Navigate to="/login" />;
  } else if (!loading) {
    console.log(4);
    return <p>{t("defaults.errorMessage")}</p>;
  }
};
export default AdminRoutes;
