import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../Shared/Loader";
import PagesHeader from "../../Shared/PagesHeader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";
import Dashboard from "../Dashboard";
import Worker from "./Worker";
import { useGetWorkers } from "../../../hooks/Workers/queries";

const Workers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data: workersData, isLoading: loading } = useGetWorkers();

  useEffect(() => {
    document.title = t("admin.nav.workers") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
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
            {workersData?.workers &&
              workersData.workers.map((worker) => {
                return <Worker key={worker.id} worker={worker} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
};

export default Workers;
