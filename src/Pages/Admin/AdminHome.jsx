import Employees from "../../features/employees/Employees";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";

const AdminHome = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("nav.about") + " - " + t("defaults.pageTitle");
    setScrollY(window.innerHeight / 2.22 - 85);
  }, [setScrollY, t]);

  return (
    <section className="login-section">
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          {t("admin.title")}
        </h1>
      </div>
      <Employees />
    </section>
  );
};
export default AdminHome;
