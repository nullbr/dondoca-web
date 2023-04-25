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
import { useEffect, useState } from "react";
// import DatePicker from "./DatePicker";
// import DatePickerV2 from "./DatePickerV2";
import DateRangePicker from "../../Shared/DateRangePicker";

function Schedules() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [workerFilter, setWorkerFilter] = useState(null);
  const [dateRange, setDateRange] = useState(null);

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  const schedules = useSelector((store) => store.schedules.schedules);
  const loadingSchedules = useSelector((store) => store.schedules.loading);
  const workers = useSelector((store) => store.workers.workers);
  const loadingWorkers = useSelector((store) => store.workers.loadingWorkers);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    // get workers if not already in store
    if (workers.length === 1) {
      dispatch(fetchWorkersAsync());
    }
  }, []);

  useEffect(() => {
    // get workerFiltered schedule
    const dateFilter = new Date();
    dispatch(fetchSchedulesAsync({ workerFilter, dateFilter }));
  }, [workerFilter]);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.schedule")} />

      <Dashboard>
        {/* workerFilter buttons */}
        <div>
          <div className="py-5">
            <DateRangePicker title={t("defaults.period")} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium text-[#a0a0a0] w-fit mb-2">
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
          schedules &&
          schedules.length > 0 &&
          schedules.map((schedule) => {
            return <Schedule key={schedule.id} schedule={schedule} />;
          })
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
