import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Permit users to access if logged in
const RestrictedRoutes = ({ children }) => {
  const { t } = useTranslation();
  const { loading, accessToken } = useSelector((store) => store.sessions);

  if (accessToken) {
    return children;
  } else if (!accessToken && !loading) {
    return <Navigate to="/login" />;
  } else if (!loading) {
    return <p>{t("defaults.errorMessage")}</p>;
  }
};
export default RestrictedRoutes;
