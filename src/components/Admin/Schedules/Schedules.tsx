import { useDispatch } from "react-redux";
// import Schedule from "./Schedule";
import { useTranslation } from "react-i18next";
import PagesHeader from "../../Shared/PagesHeader";
import Dashboard from "../Dashboard";
import Loader from "../../Shared/Loader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useEffect, useState } from "react";
import DateRangePicker from "./DateRangePicker";
import { useGetWorkers } from "../../../hooks/Workers/queries";
import { useGetSchedules } from "../../../hooks/Schedules/queries";

function Schedules() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [workerFilter, setWorkerFilter] = useState<Number | null>(null);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [t, dispatch]);

  const { data: workersData, isLoading: loadingWorkers } = useGetWorkers();
  const { data: schedulesData, isLoading: loadingSchedules } =
    useGetSchedules();

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
                  className={`sm:text-2xl text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
                    workerFilter ? "bg-primary" : "bg-gray"
                  }`}
                >
                  {t("defaults.all")}
                </button>
                {workersData?.workers.map((worker) => {
                  return (
                    <button
                      key={worker.id}
                      onClick={() => setWorkerFilter(worker.id)}
                      className={`sm:text-2xl text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
                        worker.id === workerFilter ? "bg-gray" : "bg-primary"
                      }`}
                    >
                      {worker.first_name}
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
          schedulesData?.schedules &&
          schedulesData.schedules.map((schedule) => {
            return (
              <div key={schedule.start_at_time} className="flex flex-col gap-4">
                <p className="text-lg font-medium text-subtitle-gray text-center">
                  {schedule.start_at_time}
                </p>
                {/* {schedule.data
                  .filter(
                    (data) => !workerFilter || data.worker.id === workerFilter
                  )
                  .map((data) => (
                    <Schedule key={data.id} schedule={data} />
                  ))} */}
              </div>
            );
          })
        )}
        {!schedulesData?.schedules && (
          <p className="text-center sm:text-2xl font-bold text-xl">
            Nenhum agendamento encontrado.
          </p>
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
