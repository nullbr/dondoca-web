import Workers from "./Workers/Workers";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";

const AdminHome = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("admin.nav.calendar") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  }, [setScrollY, t]);

  return (
    <main>
      <header className="relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          {t("admin.title")}
        </h1>
      </header>
      <section>
        <Workers />
      </section>
    </main>
  );
};
export default AdminHome;
