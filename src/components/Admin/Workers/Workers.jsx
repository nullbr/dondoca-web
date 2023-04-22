import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkersAsync } from "../../../features/workers/workerSlice";
import Statuses from "../../../features/Statuses";
import Loader from "../../Shared/Loader";
import PagesHeader from "../../Shared/PagesHeader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";

const Workers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { workers, status } = useSelector((store) => store.workers);

  useEffect(() => {
    document.title = t("admin.nav.workers") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    if (status === Statuses.Initial) {
      dispatch(fetchWorkersAsync());
    }
  }, []);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.workers")} />
      <section>
        {status !== Statuses.UpToDate ? (
          <Loader />
        ) : (
          <>
            <main>
              <h3>{status}</h3>
              {/* Form goes here */}
              {workers &&
                workers.length > 0 &&
                workers.map((emp) => {
                  return (
                    <div key={emp.id}>
                      <h3>{emp.name}</h3>
                      <p>{emp.job}</p>
                    </div>
                  );
                })}
            </main>
          </>
        )}
      </section>
    </>
  );
};

export default Workers;
