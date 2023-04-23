import { useDispatch, useSelector } from "react-redux";
import Day from "./Day";
import { useTranslation } from "react-i18next";
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
  const { schedules, loading } = useSelector((store) => store.schedules);

  useEffect(() => {
    document.title = t("admin.nav.schedule") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    dispatch(fetchSchedulesAsync());
  }, []);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.workers")} />

      <Dashboard>
        {loading === true ? (
          <Loader />
        ) : (
          <>
            {/* Form goes here */}
            {schedules &&
              schedules.length > 0 &&
              schedules.map((day) => {
                return <Day key={day.id} day={day} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
}

export default Schedules;
