import { useDispatch, useSelector } from "react-redux";
import Schedule from "./Schedule";
import { useTranslation } from "react-i18next";
import PagesHeader from "../../Shared/PagesHeader";
import Dashboard from "../Dashboard";
import Loader from "../../Shared/Loader";
import { fetchSchedulesAsync } from "../../../features/schedules/scheduleSlice";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
            {/* fiter buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/schedule/monday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-signature-gold ease-in duration-200 hover:shadow-2xl text-white "
              >
                Day
              </Link>

              <Link
                to="/schedule/tuesday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Tuesday
              </Link>

              <Link
                to="/schedule/wednesday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Wednesday
              </Link>

              <Link
                to="/schedule/thursday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Thursday
              </Link>

              <Link
                to="/schedule/friday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Friday
              </Link>

              <Link
                to="/schedule/saturday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Saturday
              </Link>

              <Link
                to="/schedule/sunday"
                className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-signature-gold ease-in duration-200 hover:shadow-2xl hover:text-white "
              >
                Sunday
              </Link>
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
