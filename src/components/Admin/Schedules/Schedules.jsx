import { useDispatch, useSelector } from "react-redux";
import Day from "./Day";
import { useTranslation } from "react-i18next";
import Statuses from "../../../features/Statuses";
import PagesHeader from "../../Shared/PagesHeader";
import Dashboard from "../Dashboard";
import Loader from "../../Shared/Loader";
import { fetchSchedulesAsync } from "../../../features/schedules/scheduleSlice";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useEffect } from "react";

function Schedules() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { schedules, status } = useSelector((store) => store.schedules);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    if (status === Statuses.Initial) {
      dispatch(fetchSchedulesAsync());
    }
  }, []);

  console.log(schedules);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.workers")} />

      <Dashboard>
        {status !== Statuses.UpToDate ? (
          <Loader />
        ) : (
          <>
            {/* Form goes here */}
            {schedules &&
              schedules.length > 0 &&
              schedules.map((day) => {
                return <Day day={day} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
