import { useDispatch, useSelector } from "react-redux";
import Schedule from "./Schedule";
import { useTranslation } from "react-i18next";
import PagesHeader from "../../Shared/PagesHeader";
import Dashboard from "../Dashboard";
import Loader from "../../Shared/Loader";
import { fetchSchedulesAsync } from "../../../features/schedules/scheduleSlice";
import { fetchWorkersAsync } from "../../../features/workers/workerSlice";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Schedules() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const schedules = useSelector((store) => store.schedules.schedules);
  const loadingSchedules = useSelector((store) => store.schedules.loading);
  const workers = useSelector((store) => store.workers.workers);
  const loadingWorkers = useSelector((store) => store.workers.loadingWorkers);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // get unfiltered schedule
    dispatch(fetchSchedulesAsync());

    // get workers if not already in store
    if (workers.length === 1) {
      dispatch(fetchWorkersAsync());
    }
  }, []);

  const getAllSchedules = () => {
    // get schedule for all workers
  };

  const getScheduleByWorker = (workerId) => {
    // get schedule for specific worker
  };

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.schedule")} />

      <Dashboard>
        {loadingSchedules === true || loadingWorkers === true ? (
          <Loader />
        ) : (
          <>
            {/* fiter buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={getAllSchedules}
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-signature-gold ease-in duration-200 hover:shadow-2xl text-white "
              >
                {t("defaults.all")}
              </button>
              {workers.map((worker) => {
                return (
                  <button
                    key={worker.id}
                    onClick={getScheduleByWorker(worker.id)}
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-signature-gold ease-in duration-200 hover:shadow-2xl text-white "
                  >
                    {worker.firstName}
                  </button>
                );
              })}
            </div>

            {/* Days */}
            {schedules &&
              schedules.length > 0 &&
              schedules.map((schedule) => {
                return <Schedule key={schedule.id} schedule={schedule} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
