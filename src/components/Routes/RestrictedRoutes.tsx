import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

// Permit users to access if logged in
const RestrictedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const { loading, accessToken } = useSelector(
    (store: RootState) => store.sessions
  );

  if (accessToken) {
    return children;
  } else if (!accessToken && !loading) {
    return <Navigate to="/login" />;
  } else if (!loading) {
    return <p>{t("defaults.errorMessage")}</p>;
  }
};
export default RestrictedRoutes;
