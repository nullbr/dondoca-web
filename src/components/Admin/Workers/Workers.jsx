import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkersAsync } from "../../../features/workers/workerSlice";
import Loader from "../../Shared/Loader";
import PagesHeader from "../../Shared/PagesHeader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";
import Dashboard from "../Dashboard";
import Worker from "./Worker";

const Workers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { workers, loading } = useSelector((store) => store.workers);

  useEffect(() => {
    document.title = t("admin.nav.workers") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    dispatch(fetchWorkersAsync());
  }, [t, dispatch]);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.workers")} />

      <Dashboard>
        {loading === true ? (
          <Loader />
        ) : (
          <>
            {/* Form goes here */}
            {workers &&
              workers.length > 0 &&
              workers.map((worker) => {
                return <Worker key={worker.id} worker={worker} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
};

export default Workers;
