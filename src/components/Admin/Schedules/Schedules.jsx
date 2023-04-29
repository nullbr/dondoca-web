import { useDispatch, useSelector } from "react-redux";
import Schedule from "./Schedule";
import { useTranslation } from "react-i18next";
import PagesHeader from "../../Shared/PagesHeader";
import Dashboard from "../Dashboard";
import Loader from "../../Shared/Loader";
import { fetchWorkersAsync } from "../../../features/workers/workerSlice";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useEffect, useState } from "react";
import DateRangePicker from "./DateRangePicker";
import { fetchSchedulesAsync } from "../../../features/schedules/scheduleSlice";

function Schedules() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schedules = useSelector((store) => store.schedules.schedules);
  const loadingSchedules = useSelector((store) => store.schedules.loading);
  const workers = useSelector((store) => store.workers.workers);
  const loadingWorkers = useSelector((store) => store.workers.loadingWorkers);

  const [workerFilter, setWorkerFilter] = useState(null);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // get workers if not already in store
    dispatch(fetchWorkersAsync());

    // get schedule for current date
    dispatch(fetchSchedulesAsync());
  }, [t, dispatch]);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.schedule")} />

      <Dashboard>
        {/* workerFilter buttons */}
        <div>
          <div className="py-5">
            <DateRangePicker />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium text-subtitle-gray w-fit mb-2">
              {t("admin.nav.workers")}
            </p>
            {loadingWorkers === true ? (
              <Loader />
            ) : (
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setWorkerFilter(null)}
                  className={`text-2xl min800:text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
                    workerFilter ? "bg-signature-gold" : "bg-gray"
                  }`}
                >
                  {t("defaults.all")}
                </button>
                {workers.map((worker) => {
                  return (
                    <button
                      key={worker.id}
                      onClick={() => setWorkerFilter(worker.id)}
                      className={`text-2xl min800:text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
                        worker.id === workerFilter
                          ? "bg-gray"
                          : "bg-signature-gold"
                      }`}
                    >
                      {worker.firstName}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* End of filters */}

        {/* Schedule */}
        {loadingSchedules === true ? (
          <div className="flex w-full justify-center items-center">
            <Loader />
          </div>
        ) : (
          schedules.length > 0 &&
          schedules.map((schedule) => {
            return (
              <div key={schedule.date} className="flex flex-col gap-4">
                <p className="text-lg font-medium text-subtitle-gray text-center">
                  {schedule.date}
                </p>
                {schedule.data
                  .filter(
                    (data) => !workerFilter || data.worker.id === workerFilter
                  )
                  .map((data) => (
                    <Schedule key={data.id} schedule={data} />
                  ))}
              </div>
            );
          })
        )}
        {schedules.length < 1 && (
          <p className="text-center text-2xl font-bold min620:text-xl">
            Nenhum agendamento encontrado.
          </p>
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
